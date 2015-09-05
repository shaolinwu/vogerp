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
 * entityName: org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts
 *
 */
public final class ClassifyOfAccounts extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_accounting_i18n";

    //User-defined constant define

    public static final ClassifyOfAccounts NOT_SPECIFIED = new ClassifyOfAccounts(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final ClassifyOfAccounts ASSETS = new ClassifyOfAccounts("Assets", 0, "org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts.ASSETS", "Assets Classification", null, null,false);

    public static final ClassifyOfAccounts LIABILITIES = new ClassifyOfAccounts("Liabilities", 1, "org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts.LIABILITIES", "Liabilities Classification", null, null,false);

    public static final ClassifyOfAccounts OWNEREQUITY = new ClassifyOfAccounts("OwnerEquity", 2, "org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts.OWNEREQUITY", "Owner Equity Classification", null, null,false);

    public static final ClassifyOfAccounts COMMON = new ClassifyOfAccounts("Common", 3, "org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts.COMMON", "Common Classification", null, null,false);

    public static final ClassifyOfAccounts PROFIT = new ClassifyOfAccounts("Profit", 4, "org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts.PROFIT", "Profit Classification", null, null,false);

    public static final ClassifyOfAccounts COST = new ClassifyOfAccounts("Cost", 5, "org.shaolin.vogerp.accounting.ce.ClassifyOfAccounts.COST", "Cost Classification", null, null,false);

    //End of constant define

    //Common constant define
    public ClassifyOfAccounts()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(ASSETS);
        constantList.add(LIABILITIES);
        constantList.add(OWNEREQUITY);
        constantList.add(COMMON);
        constantList.add(PROFIT);
        constantList.add(COST);
    }

    private ClassifyOfAccounts(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private ClassifyOfAccounts(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private ClassifyOfAccounts(String value, int intValue, String i18nKey,
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
        return new ClassifyOfAccounts(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

