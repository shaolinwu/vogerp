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
 * entityName: org.shaolin.vogerp.commonmodel.ce.EducationLevel
 *
 */
public final class EducationLevel extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.commonmodel.ce.EducationLevel";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_commonmodel_i18n";

    //User-defined constant define

    public static final EducationLevel NOT_SPECIFIED = new EducationLevel(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final EducationLevel SENIORSCHOOL = new EducationLevel("SENIORSCHOOL", 0, "org.shaolin.vogerp.commonmodel.ce.EducationLevel.SENIORSCHOOL", "SENIORSCHOOL", null, null,false);

    public static final EducationLevel JUNIORCOLLEGE = new EducationLevel("JUNIORCOLLEGE", 1, "org.shaolin.vogerp.commonmodel.ce.EducationLevel.JUNIORCOLLEGE", "JUNIORCOLLEGE", null, null,false);

    public static final EducationLevel UNDERGRADUATE = new EducationLevel("UNDERGRADUATE", 2, "org.shaolin.vogerp.commonmodel.ce.EducationLevel.UNDERGRADUATE", "UNDERGRADUATE", null, null,false);

    public static final EducationLevel MASTER = new EducationLevel("MASTER", 3, "org.shaolin.vogerp.commonmodel.ce.EducationLevel.MASTER", "MASTER", null, null,false);

    public static final EducationLevel DOCTOR = new EducationLevel("DOCTOR", 4, "org.shaolin.vogerp.commonmodel.ce.EducationLevel.DOCTOR", "DOCTOR", null, null,false);

    public static final EducationLevel POSTDOCTOR = new EducationLevel("POSTDOCTOR", 5, "org.shaolin.vogerp.commonmodel.ce.EducationLevel.POSTDOCTOR", "POSTDOCTOR", null, null,false);

    //End of constant define

    //Common constant define
    public EducationLevel()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(SENIORSCHOOL);
        constantList.add(JUNIORCOLLEGE);
        constantList.add(UNDERGRADUATE);
        constantList.add(MASTER);
        constantList.add(DOCTOR);
        constantList.add(POSTDOCTOR);
    }

    private EducationLevel(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private EducationLevel(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private EducationLevel(String value, int intValue, String i18nKey,
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
        return new EducationLevel(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

