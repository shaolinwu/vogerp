/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Sat Sep 05 13:11:34 CST 2015
 */

package org.shaolin.vogerp.accounting.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.accounting.ce.BudgetType
 *
 */
public final class BudgetType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.accounting.ce.BudgetType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_accounting_i18n";

    //User-defined constant define

    public static final BudgetType NOT_SPECIFIED = new BudgetType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final BudgetType ASSETS = new BudgetType("Assets", 0, "org.shaolin.vogerp.accounting.ce.BudgetType.ASSETS", "Assets Classification", null, null,false);

    public static final BudgetType MARKETING = new BudgetType("Marketing", 1, "org.shaolin.vogerp.accounting.ce.BudgetType.MARKETING", "Marketing Classification", null, null,false);

    public static final BudgetType PRODUCTION = new BudgetType("Production", 2, "org.shaolin.vogerp.accounting.ce.BudgetType.PRODUCTION", "Production Classification", null, null,false);

    public static final BudgetType INTERNALADMIN = new BudgetType("InternalAdmin", 3, "org.shaolin.vogerp.accounting.ce.BudgetType.INTERNALADMIN", "Internal Administrative Classification", null, null,false);

    //End of constant define

    //Common constant define
    public BudgetType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(ASSETS);
        constantList.add(MARKETING);
        constantList.add(PRODUCTION);
        constantList.add(INTERNALADMIN);
    }

    private BudgetType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private BudgetType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private BudgetType(String value, int intValue, String i18nKey,
            String description, Date effTime, Date expTime, boolean isPassivated)
    {
        super(value, intValue, i18nKey, description, effTime, expTime, isPassivated);
    }
    
    public String getI18nBundle()
    {
        return i18nBundle;
    }

    public void setI18nBundle(String bundle)
    {
        i18nBundle = bundle;
    }

    protected AbstractConstant __create(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        return new BudgetType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

