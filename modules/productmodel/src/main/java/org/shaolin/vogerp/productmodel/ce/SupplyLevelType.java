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
 * entityName: org.shaolin.vogerp.productmodel.ce.SupplyLevelType
 *
 */
public final class SupplyLevelType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.productmodel.ce.SupplyLevelType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_productmodel_i18n";

    //User-defined constant define

    public static final SupplyLevelType NOT_SPECIFIED = new SupplyLevelType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final SupplyLevelType LEVEL1 = new SupplyLevelType("Level1", 0, "org.shaolin.vogerp.productmodel.ce.SupplyLevelType.LEVEL1", "Day", null, null,false);

    public static final SupplyLevelType LEVEL2 = new SupplyLevelType("Level2", 1, "org.shaolin.vogerp.productmodel.ce.SupplyLevelType.LEVEL2", "Weekly", null, null,false);

    public static final SupplyLevelType LEVEL3 = new SupplyLevelType("Level3", 2, "org.shaolin.vogerp.productmodel.ce.SupplyLevelType.LEVEL3", "Monthly", null, null,false);

    public static final SupplyLevelType LEVEL4 = new SupplyLevelType("Level4", 3, "org.shaolin.vogerp.productmodel.ce.SupplyLevelType.LEVEL4", "Season", null, null,false);

    //End of constant define

    //Common constant define
    public SupplyLevelType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(LEVEL1);
        constantList.add(LEVEL2);
        constantList.add(LEVEL3);
        constantList.add(LEVEL4);
    }

    private SupplyLevelType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private SupplyLevelType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private SupplyLevelType(String value, int intValue, String i18nKey,
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
        return new SupplyLevelType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

