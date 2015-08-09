package org.shaolin.vogerp.commonmodel.util;

import java.util.List;

import org.shaolin.bmdp.datamodel.flowdiagram.Connection;
import org.shaolin.bmdp.datamodel.flowdiagram.FlowChunk;
import org.shaolin.bmdp.datamodel.flowdiagram.NodeType;
import org.shaolin.bmdp.datamodel.flowdiagram.RectangleNodeType;
import org.shaolin.vogerp.commonmodel.be.IModuleGroup;

public class ModularityUtil {

	private static final String NodeIDPrefix = "g_";

	public static void syncView(List<IModuleGroup> modules, FlowChunk chunk) {
		chunk.setEntityName("ModuleManagement");
		int x = 10;
		int y = 10;
		for (IModuleGroup module : modules) {
			RectangleNodeType rectNode = new RectangleNodeType();
			rectNode.setId(NodeIDPrefix + module.getGroupId() + "_");
			rectNode.setName(module.getName());
			rectNode.setDescription(module.getDescription());
			rectNode.setX(x);
			rectNode.setY(y);
			chunk.getNodes().add(rectNode);
			x += 30;
			y += 30;
		}
		
		for (IModuleGroup module : modules) {
			if (module.getParentId() > 0) {
				IModuleGroup parent = getParent(module.getParentId(), modules);
				Connection conn = new Connection();
				String srcId = NodeIDPrefix + module.getGroupId() + "_";
				String tarId = NodeIDPrefix + parent.getGroupId() + "_";
				conn.setName(srcId + tarId);
				conn.setSourceAnchor(srcId + "TopCenter");
				conn.setTargetAnchor(tarId + "BottomCenter");
				chunk.getConnections().add(conn);
			}
		}
	}
	
	public static IModuleGroup getParent(long id, List<IModuleGroup> modules) {
		for (IModuleGroup module : modules) {
			if (module.getGroupId() == id) {
				return module;
			}
		}
		throw new IllegalStateException("There no parent for such id: " + id);
	}

	public static void syncViewWithNewModules(List<IModuleGroup> modules, FlowChunk chunk) {
		List<NodeType> nodes = chunk.getNodes();
		List<Connection> conns = chunk.getConnections();
		for (IModuleGroup module : modules) {
			for (NodeType n : nodes) {
				if (module.getName().equals(n.getName())) {
					String newId = NodeIDPrefix + module.getGroupId() + "_";
					String oldId = n.getId();
					for (Connection conn : conns) {
						if (conn.getSourceAnchor().startsWith(oldId)) {
							conn.setSourceAnchor(conn.getSourceAnchor().replace(oldId, newId));
						}
						if (conn.getTargetAnchor().startsWith(oldId)) {
							conn.setTargetAnchor(conn.getTargetAnchor().replace(oldId, newId));
						}
					}
					n.setId(newId);
					break;
				}
			}
		}
	}
	
}
