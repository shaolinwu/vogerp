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
 * entityName: org.shaolin.vogerp.commonmodel.ce.PermissionType
 *
 */
public final class PermissionType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.commonmodel.ce.PermissionType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_commonmodel_i18n";

    //User-defined constant define

    public static final PermissionType NOT_SPECIFIED = new PermissionType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PermissionType ACCEPTABLE = new PermissionType("Acceptable", 0, "org.shaolin.vogerp.commonmodel.ce.PermissionType.ACCEPTABLE", "Acceptable", null, null,false);

    public static final PermissionType DENIABLE = new PermissionType("Deniable", 1, "org.shaolin.vogerp.commonmodel.ce.PermissionType.DENIABLE", "Deniable", null, null,false);

    public static final PermissionType VIEWABLE = new PermissionType("Viewable", 2, "org.shaolin.vogerp.commonmodel.ce.PermissionType.VIEWABLE", "Viewable", null, null,false);

    public static final PermissionType EDITABLE = new PermissionType("Editable", 3, "org.shaolin.vogerp.commonmodel.ce.PermissionType.EDITABLE", "Editable", null, null,false);

    public static final PermissionType SHOW = new PermissionType("Show", 4, "org.shaolin.vogerp.commonmodel.ce.PermissionType.SHOW", "Show", null, null,false);

    public static final PermissionType HIDDEN = new PermissionType("Hidden", 5, "org.shaolin.vogerp.commonmodel.ce.PermissionType.HIDDEN", "Hidden", null, null,false);

    //End of constant define

    //Common constant define
    public PermissionType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(ACCEPTABLE);
        constantList.add(DENIABLE);
        constantList.add(VIEWABLE);
        constantList.add(EDITABLE);
        constantList.add(SHOW);
        constantList.add(HIDDEN);
    }

    private PermissionType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PermissionType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PermissionType(String value, int intValue, String i18nKey,
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
        return new PermissionType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

