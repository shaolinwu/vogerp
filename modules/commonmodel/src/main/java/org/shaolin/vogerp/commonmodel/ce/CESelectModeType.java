/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Thu Jul 23 13:15:10 CST 2015
 */

package org.shaolin.vogerp.commonmodel.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.commonmodel.ce.CESelectModeType
 *
 */
public final class CESelectModeType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.commonmodel.ce.CESelectModeType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_commonmodel_i18n";

    //User-defined constant define

    public static final CESelectModeType NOT_SPECIFIED = new CESelectModeType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final CESelectModeType LIST = new CESelectModeType("List", 0, "org.shaolin.vogerp.commonmodel.ce.CESelectModeType.LIST", "List", null, null,false);

    public static final CESelectModeType RADIOBUTTONGROUP = new CESelectModeType("RadioButtonGroup", 1, "org.shaolin.vogerp.commonmodel.ce.CESelectModeType.RADIOBUTTONGROUP", "RadioButtonGroup", null, null,false);

    public static final CESelectModeType CHECKBOXGROUP = new CESelectModeType("CheckBoxGroup", 2, "org.shaolin.vogerp.commonmodel.ce.CESelectModeType.CHECKBOXGROUP", "CheckBoxGroup", null, null,false);

    //End of constant define

    //Common constant define
    public CESelectModeType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(LIST);
        constantList.add(RADIOBUTTONGROUP);
        constantList.add(CHECKBOXGROUP);
    }

    private CESelectModeType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private CESelectModeType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private CESelectModeType(String value, int intValue, String i18nKey,
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
        return new CESelectModeType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

