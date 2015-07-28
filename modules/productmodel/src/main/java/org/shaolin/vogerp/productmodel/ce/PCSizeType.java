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
 * entityName: org.shaolin.vogerp.productmodel.ce.PCSizeType
 *
 */
public final class PCSizeType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.productmodel.ce.PCSizeType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_productmodel_i18n";

    //User-defined constant define

    public static final PCSizeType NOT_SPECIFIED = new PCSizeType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final PCSizeType SMALL = new PCSizeType("Small", 0, "org.shaolin.vogerp.productmodel.ce.PCSizeType.SMALL", "Small", null, null,false);

    public static final PCSizeType LARGE = new PCSizeType("Large", 1, "org.shaolin.vogerp.productmodel.ce.PCSizeType.LARGE", "Large", null, null,false);

    public static final PCSizeType XLARGE = new PCSizeType("XLarge", 2, "org.shaolin.vogerp.productmodel.ce.PCSizeType.XLARGE", "Extra Large", null, null,false);

    public static final PCSizeType XXLARGE = new PCSizeType("XXLarge", 3, "org.shaolin.vogerp.productmodel.ce.PCSizeType.XXLARGE", "Double Extra Large", null, null,false);

    //End of constant define

    //Common constant define
    public PCSizeType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(SMALL);
        constantList.add(LARGE);
        constantList.add(XLARGE);
        constantList.add(XXLARGE);
    }

    private PCSizeType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private PCSizeType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private PCSizeType(String value, int intValue, String i18nKey,
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
        return new PCSizeType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

