/*
 *************************************************************************
 * The contents of this file are subject to the Openbravo  Public  License
 * Version  1.1  (the  "License"),  being   the  Mozilla   Public  License
 * Version 1.1  with a permitted attribution clause; you may not  use this
 * file except in compliance with the License. You  may  obtain  a copy of
 * the License at http://www.openbravo.com/legal/license.html
 * Software distributed under the License  is  distributed  on  an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific  language  governing  rights  and  limitations
 * under the License.
 * The Original Code is Openbravo ERP.
 * The Initial Developer of the Original Code is Openbravo SLU
 * All portions are Copyright (C) 2008-2011 Openbravo SLU
 * All Rights Reserved.
 * Contributor(s):  ______________________________________.
 ************************************************************************
*/
package org.openbravo.model.financialmgmt.calendar;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.openbravo.base.structure.ActiveEnabled;
import org.openbravo.base.structure.BaseOBObject;
import org.openbravo.base.structure.ClientEnabled;
import org.openbravo.base.structure.OrganizationEnabled;
import org.openbravo.base.structure.Traceable;
import org.openbravo.model.ad.access.User;
import org.openbravo.model.ad.system.Client;
import org.openbravo.model.common.enterprise.Organization;
import org.openbravo.model.financialmgmt.accounting.Budget;
import org.openbravo.model.financialmgmt.accounting.OrganizationClosing;
/**
 * Entity class for entity FinancialMgmtYear (stored in table C_Year).
 *
 * NOTE: This class should not be instantiated directly. To instantiate this
 * class the {@link org.openbravo.base.provider.OBProvider} should be used.
 */
public class Year extends BaseOBObject implements Traceable, ClientEnabled, OrganizationEnabled, ActiveEnabled {
    private static final long serialVersionUID = 1L;
    public static final String TABLE_NAME = "C_Year";
    public static final String ENTITY_NAME = "FinancialMgmtYear";
    public static final String PROPERTY_ID = "id";
    public static final String PROPERTY_CLIENT = "client";
    public static final String PROPERTY_ORGANIZATION = "organization";
    public static final String PROPERTY_ACTIVE = "active";
    public static final String PROPERTY_CREATIONDATE = "creationDate";
    public static final String PROPERTY_CREATEDBY = "createdBy";
    public static final String PROPERTY_UPDATED = "updated";
    public static final String PROPERTY_UPDATEDBY = "updatedBy";
    public static final String PROPERTY_FISCALYEAR = "fiscalYear";
    public static final String PROPERTY_DESCRIPTION = "description";
    public static final String PROPERTY_CALENDAR = "calendar";
    public static final String PROPERTY_PROCESSNOW = "processNow";
    public static final String PROPERTY_CREATEREGFACTACCT = "createRegFactAcct";
    public static final String PROPERTY_DROPREGFACTACCT = "dropRegFactAcct";
    public static final String PROPERTY_FINANCIALMGMTBUDGETLIST = "financialMgmtBudgetList";
    public static final String PROPERTY_FINANCIALMGMTPERIODLIST = "financialMgmtPeriodList";
    public static final String PROPERTY_ORGANIZATIONCLOSINGLIST = "organizationClosingList";
    public static final String PROPERTY_PERIODCONTROLLOGLIST = "periodControlLogList";

    public Year() {
        setDefaultValue(PROPERTY_ACTIVE, true);
        setDefaultValue(PROPERTY_PROCESSNOW, false);
        setDefaultValue(PROPERTY_CREATEREGFACTACCT, false);
        setDefaultValue(PROPERTY_DROPREGFACTACCT, false);
        setDefaultValue(PROPERTY_FINANCIALMGMTBUDGETLIST, new ArrayList<Object>());
        setDefaultValue(PROPERTY_FINANCIALMGMTPERIODLIST, new ArrayList<Object>());
        setDefaultValue(PROPERTY_ORGANIZATIONCLOSINGLIST, new ArrayList<Object>());
        setDefaultValue(PROPERTY_PERIODCONTROLLOGLIST, new ArrayList<Object>());
    }

    @Override
    public String getEntityName() {
        return ENTITY_NAME;
    }

    public String getId() {
        return (String) get(PROPERTY_ID);
    }

    public void setId(String id) {
        set(PROPERTY_ID, id);
    }

    public Client getClient() {
        return (Client) get(PROPERTY_CLIENT);
    }

    public void setClient(Client client) {
        set(PROPERTY_CLIENT, client);
    }

    public Organization getOrganization() {
        return (Organization) get(PROPERTY_ORGANIZATION);
    }

    public void setOrganization(Organization organization) {
        set(PROPERTY_ORGANIZATION, organization);
    }

    public Boolean isActive() {
        return (Boolean) get(PROPERTY_ACTIVE);
    }

    public void setActive(Boolean active) {
        set(PROPERTY_ACTIVE, active);
    }

    public Date getCreationDate() {
        return (Date) get(PROPERTY_CREATIONDATE);
    }

    public void setCreationDate(Date creationDate) {
        set(PROPERTY_CREATIONDATE, creationDate);
    }

    public User getCreatedBy() {
        return (User) get(PROPERTY_CREATEDBY);
    }

    public void setCreatedBy(User createdBy) {
        set(PROPERTY_CREATEDBY, createdBy);
    }

    public Date getUpdated() {
        return (Date) get(PROPERTY_UPDATED);
    }

    public void setUpdated(Date updated) {
        set(PROPERTY_UPDATED, updated);
    }

    public User getUpdatedBy() {
        return (User) get(PROPERTY_UPDATEDBY);
    }

    public void setUpdatedBy(User updatedBy) {
        set(PROPERTY_UPDATEDBY, updatedBy);
    }

    public String getFiscalYear() {
        return (String) get(PROPERTY_FISCALYEAR);
    }

    public void setFiscalYear(String fiscalYear) {
        set(PROPERTY_FISCALYEAR, fiscalYear);
    }

    public String getDescription() {
        return (String) get(PROPERTY_DESCRIPTION);
    }

    public void setDescription(String description) {
        set(PROPERTY_DESCRIPTION, description);
    }

    public Calendar getCalendar() {
        return (Calendar) get(PROPERTY_CALENDAR);
    }

    public void setCalendar(Calendar calendar) {
        set(PROPERTY_CALENDAR, calendar);
    }

    public Boolean isProcessNow() {
        return (Boolean) get(PROPERTY_PROCESSNOW);
    }

    public void setProcessNow(Boolean processNow) {
        set(PROPERTY_PROCESSNOW, processNow);
    }

    public Boolean isCreateRegFactAcct() {
        return (Boolean) get(PROPERTY_CREATEREGFACTACCT);
    }

    public void setCreateRegFactAcct(Boolean createRegFactAcct) {
        set(PROPERTY_CREATEREGFACTACCT, createRegFactAcct);
    }

    public Boolean isDropRegFactAcct() {
        return (Boolean) get(PROPERTY_DROPREGFACTACCT);
    }

    public void setDropRegFactAcct(Boolean dropRegFactAcct) {
        set(PROPERTY_DROPREGFACTACCT, dropRegFactAcct);
    }

    @SuppressWarnings("unchecked")
    public List<Budget> getFinancialMgmtBudgetList() {
        return (List<Budget>) get(PROPERTY_FINANCIALMGMTBUDGETLIST);
    }

    public void setFinancialMgmtBudgetList(List<Budget> financialMgmtBudgetList) {
        set(PROPERTY_FINANCIALMGMTBUDGETLIST, financialMgmtBudgetList);
    }

    @SuppressWarnings("unchecked")
    public List<Period> getFinancialMgmtPeriodList() {
        return (List<Period>) get(PROPERTY_FINANCIALMGMTPERIODLIST);
    }

    public void setFinancialMgmtPeriodList(List<Period> financialMgmtPeriodList) {
        set(PROPERTY_FINANCIALMGMTPERIODLIST, financialMgmtPeriodList);
    }

    @SuppressWarnings("unchecked")
    public List<OrganizationClosing> getOrganizationClosingList() {
        return (List<OrganizationClosing>) get(PROPERTY_ORGANIZATIONCLOSINGLIST);
    }

    public void setOrganizationClosingList(List<OrganizationClosing> organizationClosingList) {
        set(PROPERTY_ORGANIZATIONCLOSINGLIST, organizationClosingList);
    }

    @SuppressWarnings("unchecked")
    public List<PeriodControlLog> getPeriodControlLogList() {
        return (List<PeriodControlLog>) get(PROPERTY_PERIODCONTROLLOGLIST);
    }

    public void setPeriodControlLogList(List<PeriodControlLog> periodControlLogList) {
        set(PROPERTY_PERIODCONTROLLOGLIST, periodControlLogList);
    }

}
