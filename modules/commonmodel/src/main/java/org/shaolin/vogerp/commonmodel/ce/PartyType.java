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
 * entityName: org.shaolin.vogerp.commonmodel.ce.PartyType
 *
 */
public final class PartyType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.commonmodel.ce.PartyType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_commonmodel_i18n";

    //User-defined constant define

    public static final PartyType NOT_SPECIFIED = new PartyType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PartyType ORGANIZATION = new PartyType("Organization", 0, "org.shaolin.vogerp.commonmodel.ce.PartyType.ORGANIZATION", "Organization", null, null,false);

    public static final PartyType BUSINESSPARTNERS = new PartyType("BusinessPartners", 1, "org.shaolin.vogerp.commonmodel.ce.PartyType.BUSINESSPARTNERS", "Business Partners", null, null,false);

    public static final PartyType SUPPLIER = new PartyType("Supplier", 2, "org.shaolin.vogerp.commonmodel.ce.PartyType.SUPPLIER", "Supplier", null, null,false);

    public static final PartyType DISTRIBUTOR = new PartyType("Distributor", 3, "org.shaolin.vogerp.commonmodel.ce.PartyType.DISTRIBUTOR", "Distributor", null, null,false);

    //End of constant define

    //Common constant define
    public PartyType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(ORGANIZATION);
        constantList.add(BUSINESSPARTNERS);
        constantList.add(SUPPLIER);
        constantList.add(DISTRIBUTOR);
    }

    private PartyType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PartyType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PartyType(String value, int intValue, String i18nKey,
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
        return new PartyType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

