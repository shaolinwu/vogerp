package org.shaolin.vogerp.commonmodel.internal;

import java.util.ArrayList;
import java.util.List;

import org.shaolin.bmdp.runtime.AppContext;
import org.shaolin.bmdp.workflow.be.ITask;
import org.shaolin.bmdp.workflow.coordinator.ICoordinatorService;
import org.shaolin.bmdp.workflow.coordinator.IResourceManager;
import org.shaolin.vogerp.commonmodel.be.IPersonalInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ResourceManagerImpl implements IResourceManager {
	
	private static final Logger logger = LoggerFactory.getLogger(ResourceManagerImpl.class);

	private final OrganizationServiceImpl orgService;
	
	public ResourceManagerImpl(OrganizationServiceImpl orgService) {
		this.orgService = orgService;
	}
	
	@Override
	public Class getServiceInterface() {
		return IResourceManager.class;
	}

	@Override
	public void assignOnwer(ITask task) {
		ICoordinatorService coordinator = AppContext.get().getService(ICoordinatorService.class);
		
		if (task.getPartyType() == null || task.getPartyType().isEmpty()) {
			throw new IllegalArgumentException("Please specify the party type for this task: " + task.getSubject());
		}
		List<IPersonalInfo> freeResources = getFreeResource(task.getOrgId(), task.getPartyType());
		if (freeResources == null || freeResources.isEmpty()) {
			throw new IllegalStateException("Please assign the party type for a resource or an employee: " + task.getPartyType());
		}
		
		// resource assignment algorithm.
		if (coordinator.getTaskSize() == 0) {
			// assign the first resource if there is zero task.
			task.setPartyId(freeResources.get(0).getId());
		} else {
			// roundrobin assignment.
			boolean assigned = false;
			long lessBusyId = -1;
			int lessCount = Integer.MAX_VALUE;
			for (IPersonalInfo employee: freeResources) {
				int taskCount = coordinator.getPartyTasks(employee.getId()).size();
				if (taskCount == 0) {
					task.setPartyId(employee.getId());
					assigned = true;
					break;
				}
				if (taskCount < lessCount) {
					lessCount = taskCount;
					lessBusyId = employee.getId();
				}
			}
			if (!assigned) {
				// all employee are busy, select the less busy one.
				task.setPartyId(lessBusyId);
			}
		}
		
		if (logger.isDebugEnabled()) {
			logger.debug("Assigned resource {} to task {}",
					new Object[] { task.getPartyId(), task });
		}
	}
	
	public Object getResource(long orgId, long partyId) {
		if (orgId <= 0) {
			return null;
		}
		List<IPersonalInfo> allResources = this.orgService.getEmployeese(orgId);
		for (IPersonalInfo employee : allResources) {
			if (employee.getId() == partyId) {
				return employee.getEmpId() + "(" + employee.getLastName() + " "
						+ employee.getFirstName() + ")";
			}
		}
		return null;
	}
	
	public List<IPersonalInfo> getFreeResource(long orgId, String partType) {
		List<IPersonalInfo> allResources = this.orgService.getEmployeese(orgId);
		List<IPersonalInfo> availableResources = new ArrayList<IPersonalInfo>();
		for (IPersonalInfo employee : allResources) {
			if (employee.getType().equals(partType)) {
				availableResources.add(employee);
			}
		}
		return availableResources;
	}

}
