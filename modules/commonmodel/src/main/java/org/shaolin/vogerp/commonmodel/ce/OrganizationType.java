/*
 * This code is generated automatically, any change will be replaced after rebuild.
 * Generated on Mon May 18 00:05:49 CST 2015
 */

package org.shaolin.vogerp.commonmodel.ce;
import java.util.*;
import org.shaolin.bmdp.runtime.ce.IConstantEntity;
import org.shaolin.bmdp.runtime.ce.AbstractConstant;

/**
 * 
 * entityName: org.shaolin.vogerp.commonmodel.ce.OrganizationType
 *
 */
public final class OrganizationType extends AbstractConstant
{
    public static final String ENTITY_NAME = "org.shaolin.vogerp.commonmodel.ce.OrganizationType";
    
    protected static final long serialVersionUID = 0x811b9115811b9115L;
    private static String i18nBundle = "org_shaolin_vogerp_commonmodel_i18n";

    //User-defined constant define

    public static final OrganizationType NOT_SPECIFIED = new OrganizationType(CONSTANT_DEFAULT_VALUE, -1, null, null, null, null, false);

    public static final OrganizationType GENERIC = new OrganizationType("Generic", 0, "org.shaolin.vogerp.commonmodel.ce.OrganizationType.GENERIC", "Generic.", null, null,false);

    public static final OrganizationType LEGALENTERPRISE = new OrganizationType("LegalEnterprise", 1, "org.shaolin.vogerp.commonmodel.ce.OrganizationType.LEGALENTERPRISE", "An enterpise customer with legal accounting needed.", null, null,false);

    public static final OrganizationType LEGALGOVNER = new OrganizationType("LegalGovner", 2, "org.shaolin.vogerp.commonmodel.ce.OrganizationType.LEGALGOVNER", "An government customer with legal accounting\tneeded.", null, null,false);

    public static final OrganizationType DEPARTMENT = new OrganizationType("Department", 3, "org.shaolin.vogerp.commonmodel.ce.OrganizationType.DEPARTMENT", "Department is an informal organization", null, null,false);

    public static final OrganizationType GROUP = new OrganizationType("Group", 4, "org.shaolin.vogerp.commonmodel.ce.OrganizationType.GROUP", "Group is an informal organization", null, null,false);

    public static final OrganizationType FAMILY = new OrganizationType("Family", 5, "org.shaolin.vogerp.commonmodel.ce.OrganizationType.FAMILY", "Family is an informal organization", null, null,false);

    public static final OrganizationType OTHER = new OrganizationType("Other", 6, "org.shaolin.vogerp.commonmodel.ce.OrganizationType.OTHER", "Other is an informal organization by default", null, null,false);

    //End of constant define

    //Common constant define
    public OrganizationType()
    {
        constantList.add(NOT_SPECIFIED);
        constantList.add(GENERIC);
        constantList.add(LEGALENTERPRISE);
        constantList.add(LEGALGOVNER);
        constantList.add(DEPARTMENT);
        constantList.add(GROUP);
        constantList.add(FAMILY);
        constantList.add(OTHER);
    }

    private OrganizationType(long id, String value, int intValue, String i18nKey, String description)
    {
        super(id, value, intValue, i18nKey, description);
    }
    
    private OrganizationType(String value, int intValue, String i18nKey,
        String description, Date effTime, Date expTime)
    {
        super(value, intValue, i18nKey, description, effTime, expTime);
    }

    private OrganizationType(String value, int intValue, String i18nKey,
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
        return new OrganizationType(value, intValue, i18nKey,
            description, effTime, expTime);
    }

    protected String getTypeEntityName()
    {
        return ENTITY_NAME;
    }

}

