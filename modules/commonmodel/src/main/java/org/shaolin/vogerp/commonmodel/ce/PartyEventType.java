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
 * entityName: org.shaolin.vogerp.commonmodel.ce.PartyEventType
 *
 */
public final class PartyEventType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.commonmodel.ce.PartyEventType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_commonmodel_i18n";

    //User-defined constant define

    public static final PartyEventType NOT_SPECIFIED = new PartyEventType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PartyEventType TELEPHONE = new PartyEventType("Telephone", 0, "org.shaolin.vogerp.commonmodel.ce.PartyEventType.TELEPHONE", "Telephone", null, null,false);

    public static final PartyEventType EMAIL = new PartyEventType("Email", 1, "org.shaolin.vogerp.commonmodel.ce.PartyEventType.EMAIL", "Email", null, null,false);

    public static final PartyEventType FACE2FACE = new PartyEventType("Face2Face", 2, "org.shaolin.vogerp.commonmodel.ce.PartyEventType.FACE2FACE", "Face to Face", null, null,false);

    public static final PartyEventType WEBFORM = new PartyEventType("WebForm", 3, "org.shaolin.vogerp.commonmodel.ce.PartyEventType.WEBFORM", "Web Form", null, null,false);

    //End of constant define

    //Common constant define
    public PartyEventType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(TELEPHONE);
        constantList.add(EMAIL);
        constantList.add(FACE2FACE);
        constantList.add(WEBFORM);
    }

    private PartyEventType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PartyEventType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PartyEventType(String value, int intValue, String i18nKey,
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
        return new PartyEventType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

