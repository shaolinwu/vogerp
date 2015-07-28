/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Sun Jul 19 23:56:24 CST 2015
 */

package org.shaolin.vogerp.accounting.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.accounting.ce.BudgetDateType
 *
 */
public final class BudgetDateType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.accounting.ce.BudgetDateType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_accounting_i18n";

    //User-defined constant define

    public static final BudgetDateType NOT_SPECIFIED = new BudgetDateType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final BudgetDateType YEARLY = new BudgetDateType("Yearly", 0, "org.shaolin.vogerp.accounting.ce.BudgetDateType.YEARLY", "Yearly", null, null,false);

    public static final BudgetDateType SEASONLY = new BudgetDateType("Seasonly", 1, "org.shaolin.vogerp.accounting.ce.BudgetDateType.SEASONLY", "Seasonly", null, null,false);

    public static final BudgetDateType MONTHLY = new BudgetDateType("Monthly", 2, "org.shaolin.vogerp.accounting.ce.BudgetDateType.MONTHLY", "Monthly", null, null,false);

    public static final BudgetDateType WEEKLY = new BudgetDateType("Weekly", 3, "org.shaolin.vogerp.accounting.ce.BudgetDateType.WEEKLY", "Weekly", null, null,false);

    //End of constant define

    //Common constant define
    public BudgetDateType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(YEARLY);
        constantList.add(SEASONLY);
        constantList.add(MONTHLY);
        constantList.add(WEEKLY);
    }

    private BudgetDateType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private BudgetDateType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private BudgetDateType(String value, int intValue, String i18nKey,
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
        return new BudgetDateType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

