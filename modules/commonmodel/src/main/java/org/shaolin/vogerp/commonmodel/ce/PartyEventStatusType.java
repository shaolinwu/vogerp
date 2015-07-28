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
 * entityName: org.shaolin.vogerp.commonmodel.ce.PartyEventStatusType
 *
 */
public final class PartyEventStatusType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.commonmodel.ce.PartyEventStatusType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_commonmodel_i18n";

    //User-defined constant define

    public static final PartyEventStatusType NOT_SPECIFIED = new PartyEventStatusType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PartyEventStatusType SCHEDULED = new PartyEventStatusType("Scheduled", 0, "org.shaolin.vogerp.commonmodel.ce.PartyEventStatusType.SCHEDULED", "Scheduled", null, null,false);

    public static final PartyEventStatusType WAITING_FOR_SOLUTION = new PartyEventStatusType("Waiting for Solution", 1, "org.shaolin.vogerp.commonmodel.ce.PartyEventStatusType.WAITING_FOR_SOLUTION", "Waiting for Solution", null, null,false);

    public static final PartyEventStatusType FINISHED = new PartyEventStatusType("Finished", 2, "org.shaolin.vogerp.commonmodel.ce.PartyEventStatusType.FINISHED", "Finished", null, null,false);

    public static final PartyEventStatusType CANCELLED = new PartyEventStatusType("Cancelled", 3, "org.shaolin.vogerp.commonmodel.ce.PartyEventStatusType.CANCELLED", "Cancelled", null, null,false);

    //End of constant define

    //Common constant define
    public PartyEventStatusType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(SCHEDULED);
        constantList.add(WAITING_FOR_SOLUTION);
        constantList.add(FINISHED);
        constantList.add(CANCELLED);
    }

    private PartyEventStatusType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PartyEventStatusType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PartyEventStatusType(String value, int intValue, String i18nKey,
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
        return new PartyEventStatusType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

