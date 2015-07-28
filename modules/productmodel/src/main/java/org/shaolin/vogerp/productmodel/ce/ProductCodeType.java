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
 * entityName: org.shaolin.vogerp.productmodel.ce.ProductCodeType
 *
 */
public final class ProductCodeType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.productmodel.ce.ProductCodeType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_productmodel_i18n";

    //User-defined constant define

    public static final ProductCodeType NOT_SPECIFIED = new ProductCodeType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final ProductCodeType FACTORYCODE = new ProductCodeType("FactoryCode", 0, "org.shaolin.vogerp.productmodel.ce.ProductCodeType.FACTORYCODE", "Factory Code", null, null,false);

    public static final ProductCodeType SKUCODE = new ProductCodeType("SKUCode", 1, "org.shaolin.vogerp.productmodel.ce.ProductCodeType.SKUCODE", "SKU Code", null, null,false);

    public static final ProductCodeType ISBNCODE = new ProductCodeType("ISBNCode", 2, "org.shaolin.vogerp.productmodel.ce.ProductCodeType.ISBNCODE", "ISBN Code", null, null,false);

    public static final ProductCodeType UPCACODE = new ProductCodeType("UPCACode", 3, "org.shaolin.vogerp.productmodel.ce.ProductCodeType.UPCACODE", "UPCA Code", null, null,false);

    public static final ProductCodeType UPCECODE = new ProductCodeType("UPCECode", 4, "org.shaolin.vogerp.productmodel.ce.ProductCodeType.UPCECODE", "UPCE Code", null, null,false);

    //End of constant define

    //Common constant define
    public ProductCodeType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(FACTORYCODE);
        constantList.add(SKUCODE);
        constantList.add(ISBNCODE);
        constantList.add(UPCACODE);
        constantList.add(UPCECODE);
    }

    private ProductCodeType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private ProductCodeType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private ProductCodeType(String value, int intValue, String i18nKey,
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
        return new ProductCodeType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

