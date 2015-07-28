/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Mon May 18 23:51:27 CST 2015
 */

package org.shaolin.vogerp.commonmodel.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.commonmodel.ce.PartyRoleType
 *
 */
public final class PartyRoleType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.commonmodel.ce.PartyRoleType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_commonmodel_i18n";

    //User-defined constant define

    public static final PartyRoleType NOT_SPECIFIED = new PartyRoleType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    //End of constant define

    //Common constant define
    public PartyRoleType()
    {
        constantList.add(NOT_SPECIFIED);
    }

    private PartyRoleType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PartyRoleType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PartyRoleType(String value, int intValue, String i18nKey,
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
        return new PartyRoleType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

