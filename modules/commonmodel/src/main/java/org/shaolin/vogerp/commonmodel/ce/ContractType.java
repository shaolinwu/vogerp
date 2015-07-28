/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Thu Jul 23 13:15:09 CST 2015
 */

package org.shaolin.vogerp.commonmodel.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.commonmodel.ce.ContractType
 *
 */
public final class ContractType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.commonmodel.ce.ContractType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_commonmodel_i18n";

    //User-defined constant define

    public static final ContractType NOT_SPECIFIED = new ContractType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final ContractType TRIAL = new ContractType("Trial", 0, "org.shaolin.vogerp.commonmodel.ce.ContractType.TRIAL", "Trial for free in two monthes", null, null,false);

    public static final ContractType MONTHLY = new ContractType("Monthly", 1, "org.shaolin.vogerp.commonmodel.ce.ContractType.MONTHLY", "Monthly", null, null,false);

    public static final ContractType SEASON = new ContractType("Season", 2, "org.shaolin.vogerp.commonmodel.ce.ContractType.SEASON", "Season", null, null,false);

    public static final ContractType YEAR = new ContractType("Year", 3, "org.shaolin.vogerp.commonmodel.ce.ContractType.YEAR", "Year", null, null,false);

    //End of constant define

    //Common constant define
    public ContractType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(TRIAL);
        constantList.add(MONTHLY);
        constantList.add(SEASON);
        constantList.add(YEAR);
    }

    private ContractType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private ContractType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private ContractType(String value, int intValue, String i18nKey,
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
        return new ContractType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

