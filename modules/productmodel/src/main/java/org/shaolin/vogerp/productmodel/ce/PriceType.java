/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Tue Jul 21 23:50:34 CST 2015
 */

package org.shaolin.vogerp.productmodel.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.productmodel.ce.PriceType
 *
 */
public final class PriceType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.productmodel.ce.PriceType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_productmodel_i18n";

    //User-defined constant define

    public static final PriceType NOT_SPECIFIED = new PriceType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PriceType BASE = new PriceType("Base", 0, "org.shaolin.vogerp.productmodel.ce.PriceType.BASE", "Basic Price", null, null,false);

    public static final PriceType BASENORTH = new PriceType("BaseNorth", 1, "org.shaolin.vogerp.productmodel.ce.PriceType.BASENORTH", "Basic Price in north", null, null,false);

    public static final PriceType BASESOUTH = new PriceType("BaseSouth", 2, "org.shaolin.vogerp.productmodel.ce.PriceType.BASESOUTH", "Basic Price in south", null, null,false);

    public static final PriceType DISCOUNTNORTH = new PriceType("DiscountNorth", 3, "org.shaolin.vogerp.productmodel.ce.PriceType.DISCOUNTNORTH", "Discounted Price in north", null, null,false);

    public static final PriceType DISCOUNTSOUTH = new PriceType("DiscountSouth", 4, "org.shaolin.vogerp.productmodel.ce.PriceType.DISCOUNTSOUTH", "Discounted Price in south", null, null,false);

    public static final PriceType EXTRA = new PriceType("Extra", 3, "org.shaolin.vogerp.productmodel.ce.PriceType.EXTRA", "Extra Price", null, null,false);

    public static final PriceType OFFER = new PriceType("Offer", 4, "org.shaolin.vogerp.productmodel.ce.PriceType.OFFER", "Offerred Price by the manufactoring", null, null,false);

    //End of constant define

    //Common constant define
    public PriceType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(BASE);
        constantList.add(BASENORTH);
        constantList.add(BASESOUTH);
        constantList.add(DISCOUNTNORTH);
        constantList.add(DISCOUNTSOUTH);
        constantList.add(EXTRA);
        constantList.add(OFFER);
    }

    private PriceType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PriceType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PriceType(String value, int intValue, String i18nKey,
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
        return new PriceType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

