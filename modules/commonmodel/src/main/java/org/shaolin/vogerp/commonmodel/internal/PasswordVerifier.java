package org.shaolin.vogerp.commonmodel.internal;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.shaolin.bmdp.i18n.LocaleContext;
import org.shaolin.bmdp.i18n.ResourceUtil;

public class PasswordVerifier {
	
	private static final char[] CHARS = { '0', '1', '2', '3', '4', '5', '6',
		'7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
		'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
		'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
		'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
		'X', 'Y', 'Z' };

	public static PasswordCheckResult checkPasswordPolicy(String password) {
		int len = password.length();

		int minLen = AccountPolicyConfig.getPasswordMinLength();
		if (minLen > 0 && len < minLen) {
			return new PasswordCheckResult(false, "getPasswordMinLength");
		}

		int maxLen = AccountPolicyConfig.getPasswordMaxLength();
		if (maxLen >= 0 && len > maxLen) {
			return new PasswordCheckResult(false, "getPasswordMaxLength");
		}

		int digitCount = 0;
		int letterCount = 0;
		int lowerCaseLetterCount = 0;
		int upperCaseLetterCount = 0;
		for (int i = 0; i < len; i++) {
			char c = password.charAt(i);
			if (Character.isDigit(c)) {
				digitCount++;
			} else if (Character.isLetter(c)) {
				letterCount++;
				if (Character.isLowerCase(c)) {
					lowerCaseLetterCount++;
				}
				if (Character.isUpperCase(c)) {
					upperCaseLetterCount++;
				}
			}
		}

		int minDigitCount = AccountPolicyConfig.getPasswordMinDigitCount();
		if (minDigitCount > 0 && digitCount < minDigitCount) {
			return new PasswordCheckResult(false,
					"EBOSExceptionConstants.EBOS_SECURITY_193");
		}

		int maxDigitCount = AccountPolicyConfig.getPasswordMaxDigitCount();
		if (maxDigitCount >= 0 && digitCount > maxDigitCount) {
			return new PasswordCheckResult(false,
					"EBOSExceptionConstants.EBOS_SECURITY_181");
		}

		int minLetterCount = AccountPolicyConfig.getPasswordMinLetterCount();
		if (minLetterCount > 0 && letterCount < minLetterCount) {
			return new PasswordCheckResult(false,
					"EBOSExceptionConstants.EBOS_SECURITY_193");
		}

		int maxLetterCount = AccountPolicyConfig.getPasswordMaxLetterCount();
		if (maxLetterCount >= 0 && letterCount > maxLetterCount) {
			return new PasswordCheckResult(false,
					"EBOSExceptionConstants.EBOS_SECURITY_181");
		}

		int minLowerCaseLetterCount = AccountPolicyConfig
				.getPasswordMinLowerCaseLetterCount();
		if (minLowerCaseLetterCount > 0
				&& lowerCaseLetterCount < minLowerCaseLetterCount) {
			return new PasswordCheckResult(false,
					"EBOSExceptionConstants.EBOS_SECURITY_181");
		}

		int maxLowerCaseLetterCount = AccountPolicyConfig
				.getPasswordMaxLowerCaseLetterCount();
		if (maxLowerCaseLetterCount >= 0
				&& lowerCaseLetterCount > maxLowerCaseLetterCount) {
			return new PasswordCheckResult(false,
					"EBOSExceptionConstants.EBOS_SECURITY_181");
		}

		int minUpperCaseLetterCount = AccountPolicyConfig
				.getPasswordMinUpperCaseLetterCount();
		if (minUpperCaseLetterCount > 0
				&& upperCaseLetterCount < minUpperCaseLetterCount) {
			return new PasswordCheckResult(false,
					"EBOSExceptionConstants.EBOS_SECURITY_181");
		}

		int maxUpperCaseLetterCount = AccountPolicyConfig
				.getPasswordMaxUpperCaseLetterCount();
		if (maxUpperCaseLetterCount >= 0
				&& upperCaseLetterCount > maxUpperCaseLetterCount) {
			return new PasswordCheckResult(false,
					"EBOSExceptionConstants.EBOS_SECURITY_181");
		}

		return new PasswordCheckResult(true, null);
	}

	private static void addPolicyEntry(int arg, String bundleKey,
			List policySummary) {
		if (arg > 0) {
			policySummary.add(ResourceUtil.getResource(
					LocaleContext.getUserLocale(),
					"bmiasia.ebos.security.security.Bundle", bundleKey,
					new Object[] { new Integer(arg) }));
		}
	}

	/**
	 * returns the password policy contains EBOS password policy
	 *
	 * @return a list contains the extension password policies
	 */
	public static List getPasswordPolicy() {
		List policySummary = new ArrayList();
		int minLen = AccountPolicyConfig.getPasswordMinLength();
		addPolicyEntry(minLen, "PwdMinLength", policySummary);

		int maxLen = AccountPolicyConfig.getPasswordMaxLength();
		addPolicyEntry(maxLen, "PwdMaxLength", policySummary);

		int minDigitCount = AccountPolicyConfig.getPasswordMinDigitCount();
		addPolicyEntry(minDigitCount, "PwdMinDigitCount", policySummary);

		int maxDigitCount = AccountPolicyConfig.getPasswordMaxDigitCount();
		addPolicyEntry(maxDigitCount, "PwdMaxDigitCount", policySummary);

		int minLetterCount = AccountPolicyConfig.getPasswordMinLetterCount();
		addPolicyEntry(minLetterCount, "PwdMinLetterCount", policySummary);

		int maxLetterCount = AccountPolicyConfig.getPasswordMaxLetterCount();
		addPolicyEntry(maxLetterCount, "PwdMaxLetterCount", policySummary);

		int minLowerCaseLetterCount = AccountPolicyConfig
				.getPasswordMinLowerCaseLetterCount();
		addPolicyEntry(minLowerCaseLetterCount, "PwdMinLowerLetterCount",
				policySummary);

		int maxLowerCaseLetterCount = AccountPolicyConfig
				.getPasswordMaxLowerCaseLetterCount();
		addPolicyEntry(maxLowerCaseLetterCount, "PwdMaxLowerLetterCount",
				policySummary);

		int minUpperCaseLetterCount = AccountPolicyConfig
				.getPasswordMinUpperCaseLetterCount();
		addPolicyEntry(minUpperCaseLetterCount, "PwdMinUpperLetterCount",
				policySummary);

		int maxUpperCaseLetterCount = AccountPolicyConfig
				.getPasswordMaxUpperCaseLetterCount();
		addPolicyEntry(maxUpperCaseLetterCount, "PwdMaxUpperLetterCount",
				policySummary);

		return policySummary;
	}

	public static String genPassword(int len) {
		if (len <= 0) {
			throw new IllegalArgumentException();
		}

		Random r = new Random();
		StringBuffer pwd = new StringBuffer();
		for (int i = 0; i < len; i++) {
			int idx = Math.abs(r.nextInt(62));
			pwd.append(CHARS[idx]);
		}
		return String.valueOf(pwd);
	}

	public static String getPasswordHash(String password)
			throws NoSuchAlgorithmException {
		MessageDigest md5 = MessageDigest.getInstance("MD5");
		md5.update(password.getBytes());
		byte[] hash = md5.digest();
		return byte2hex(hash);
	}

	private static String byte2hex(byte[] b) {
		StringBuffer sb = new StringBuffer(32);
		for (int n = 0; n < b.length; n++) {
			String hex = Integer.toHexString(b[n] & 0XFF).toUpperCase();
			if (hex.length() == 1) {
				sb.append('0');
			}
			sb.append(hex);
		}
		return new String(sb);
	}

	public static String validatePassword(String password) {
		if (password == null || password.length() < 6) {
			return (ResourceUtil.getResource(
					LocaleContext.getUserLocale(),
					"bmiasia.ebos.security.security.Bundle", "UserPwdLength"));
		}

		boolean hasLetter = false;
		boolean hasNumber = false;
		for (int i = 0, n = password.length(); i < n; i++) {
			char ch = password.charAt(i);
			if (ch < '!' || ch > '~') {
				return (ResourceUtil.getResource(
						LocaleContext.getUserLocale(),
						"bmiasia.ebos.security.security.Bundle",
						"PwdContainsCharNum"));
			}

			if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
				// has letter
				hasLetter = true;
			}
			if (ch >= '0' && ch <= '9') {
				// has number
				hasNumber = true;
			}
		}
		if (!(hasLetter && hasNumber)) {
			return (ResourceUtil.getResource(
					LocaleContext.getUserLocale(),
					"bmiasia.ebos.security.security.Bundle",
					"PwdContainsCharNumTogeteher"));
		}

		return null;
	}

}
