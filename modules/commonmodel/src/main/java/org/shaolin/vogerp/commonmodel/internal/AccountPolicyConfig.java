package org.shaolin.vogerp.commonmodel.internal;


class AccountPolicyConfig
{
    public static int getLockDuration()
    {
        int value = get("LOCK_DURATION");
        if (value < 0)
        {
            return 30;
        }
        return value;
    }

    public static int getChangePasswordPeriod()
    {
        int value = get("PASSWORD_CHANGE_PERIOD");
        if (value < 0)
        {
            return 90;
        }
        return value;
    }

    public static int getLoginAttemp()
    {
        int value = get("MAX_LOGIN_ATTEMP");
        if (value < 0)
        {
            return 3;
        }
        return value;
    }
    
    public static int getLoginPeriod()
    {
        int value = get("LOGIN_PERIOD");
        if (value < 0)
        {
            return 90;
        }
        return value;
    }

    public static int getPasswordHistoryCheck()
    {
        int value = get("PASSWORD_HISTORY_CHECK");
        if (value < 0)
        {
            return 4;
        }
        return value;
    }

    public static int getPasswordMinLength()
    {
        int value = get("PASSWORD_MIN_LENGTH");
        if (value < 0)
        {
            return 8;
        }
        return value;
    }

    public static int getPasswordMaxLength()
    {
        return get("PASSWORD_MAX_LENGTH");
    }

    public static int getPasswordMinDigitCount()
    {
        int value = get("PASSWORD_MIN_DIGIT_COUNT");
        if (value < 0)
        {
            return 1;
        }
        return value;
    }

    public static int getPasswordMaxDigitCount()
    {
        return get("PASSWORD_MAX_DIGIT_COUNT");
    }

    public static int getPasswordMinLetterCount()
    {
        int value = get("PASSWORD_MIN_LETTER_COUNT");
        if (value < 0)
        {
            return 1;
        }
        return value;
    }

    public static int getPasswordMaxLetterCount()
    {
        return get("PASSWORD_MAX_LETTER_COUNT");
    }

    public static int getPasswordMinLowerCaseLetterCount()
    {
        return get("PASSWORD_MIN_LOWER_CASE_LETTER_COUNT");
    }

    public static int getPasswordMaxLowerCaseLetterCount()
    {
        return get("PASSWORD_MAX_LOWER_CASE_LETTER_COUNT");
    }

    public static int getPasswordMinUpperCaseLetterCount()
    {
        return get("PASSWORD_MIN_UPPER_CASE_LETTER_COUNT");
    }

    public static int getPasswordMaxUpperCaseLetterCount()
    {
        return get("PASSWORD_MAX_UPPER_CASE_LETTER_COUNT");
    }
    
    public static void set(String key, int value)
    {
    }
    
    public static int get(String key)
    {
        return 0;
    }

    private AccountPolicyConfig()
    {
    }

}
