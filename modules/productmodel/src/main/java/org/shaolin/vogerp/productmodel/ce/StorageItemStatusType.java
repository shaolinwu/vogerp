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
 * entityName: org.shaolin.vogerp.productmodel.ce.StorageItemStatusType
 *
 */
public final class StorageItemStatusType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.productmodel.ce.StorageItemStatusType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_productmodel_i18n";

    //User-defined constant define

    public static final StorageItemStatusType NOT_SPECIFIED = new StorageItemStatusType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final StorageItemStatusType GOOD = new StorageItemStatusType("Good", 0, "org.shaolin.vogerp.productmodel.ce.StorageItemStatusType.GOOD", "Good", null, null,false);

    public static final StorageItemStatusType DEFECT = new StorageItemStatusType("Defect", 1, "org.shaolin.vogerp.productmodel.ce.StorageItemStatusType.DEFECT", "Defect", null, null,false);

    public static final StorageItemStatusType DAMAGED = new StorageItemStatusType("Damaged", 2, "org.shaolin.vogerp.productmodel.ce.StorageItemStatusType.DAMAGED", "Damaged", null, null,false);

    //End of constant define

    //Common constant define
    public StorageItemStatusType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(GOOD);
        constantList.add(DEFECT);
        constantList.add(DAMAGED);
    }

    private StorageItemStatusType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private StorageItemStatusType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private StorageItemStatusType(String value, int intValue, String i18nKey,
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
        return new StorageItemStatusType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

