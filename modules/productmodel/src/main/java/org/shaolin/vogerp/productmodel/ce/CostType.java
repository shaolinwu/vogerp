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
 * entityName: org.shaolin.vogerp.productmodel.ce.CostType
 *
 */
public final class CostType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.productmodel.ce.CostType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_productmodel_i18n";

    //User-defined constant define

    public static final CostType NOT_SPECIFIED = new CostType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final CostType PURCHASE = new CostType("Purchase", 0, "org.shaolin.vogerp.productmodel.ce.CostType.PURCHASE", "Purchase Estimation", null, null,false);

    public static final CostType MANAGEMENTFEE = new CostType("ManagementFee", 1, "org.shaolin.vogerp.productmodel.ce.CostType.MANAGEMENTFEE", "Management Fee", null, null,false);

    public static final CostType DELIVERYFEE = new CostType("DeliveryFee", 2, "org.shaolin.vogerp.productmodel.ce.CostType.DELIVERYFEE", "Delivery Fee", null, null,false);

    public static final CostType HUMANFEE = new CostType("HumanFee", 3, "org.shaolin.vogerp.productmodel.ce.CostType.HUMANFEE", "Human Fee", null, null,false);

    //End of constant define

    //Common constant define
    public CostType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(PURCHASE);
        constantList.add(MANAGEMENTFEE);
        constantList.add(DELIVERYFEE);
        constantList.add(HUMANFEE);
    }

    private CostType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private CostType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private CostType(String value, int intValue, String i18nKey,
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
        return new CostType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

