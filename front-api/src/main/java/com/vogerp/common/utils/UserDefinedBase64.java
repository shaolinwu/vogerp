package com.vogerp.common.utils;

public class UserDefinedBase64 {

	private static String _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

	public static String encode(String input0) {
		StringBuilder output = new StringBuilder();
		int chr1, chr2, chr3;
		int enc1=0, enc2=0, enc3=0, enc4=0;
		int i = 0;
		StringBuilder input = _utf8_encode(input0);
		while (i < input.length()) {
			chr1 = input.charAt(i++);
			if (i < input.length()) {
				chr2 = input.charAt(i++);
			} else {
				chr2 = 0;
			}
			if (i < input.length()) {
				chr3 = input.charAt(i++);
			} else {
				chr3 = 0;
			}
			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;
			if (isNaNChar(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaNChar(chr3)) {
				enc4 = 64;
			}
			output.append(_keyStr.charAt(enc1));
			output.append(_keyStr.charAt(enc2));
			output.append(_keyStr.charAt(enc3));
			output.append(_keyStr.charAt(enc4));
		}
		return output.toString();
	}

	private static boolean isNaNChar(int c) {
		return c <= 0;
	}

	public static String decode(String input) {
		StringBuilder output = new StringBuilder();
		char chr1, chr2, chr3;
		int enc1=0, enc2=0, enc3=0, enc4=0;
		int i = 0;
		input = input.replace("/[^A-Za-z0-9\\+\\/\\=]/g", "");
		while (i < input.length()) {
			enc1 = _keyStr.indexOf(input.charAt(i++));
			enc2 = _keyStr.indexOf(input.charAt(i++));
			enc3 = _keyStr.indexOf(input.charAt(i++));
			enc4 = _keyStr.indexOf(input.charAt(i++));
			chr1 = (char) ((enc1 << 2) | (enc2 >> 4));
			chr2 = (char) (((enc2 & 15) << 4) | (enc3 >> 2));
			chr3 = (char) (((enc3 & 3) << 6) | enc4);
			output.append(chr1);
			if (enc3 != 64) {
				output.append(chr2);
			}
			if (enc4 != 64) {
				output.append(chr3);
			}
		}
		return _utf8_decode(output).toString();
	}

	private static StringBuilder _utf8_encode(String string) {
		string = string.replace("/\r\n/g", "\n");

		StringBuilder utftext = new StringBuilder();
		for (int n = 0; n < string.length(); n++) {
			char c = string.charAt(n);
			if (c < 128) {
				utftext.append(c);
			}

			else if ((c > 127) && (c < 2048)) {
				utftext.append((char) ((c >> 6) | 192));
				utftext.append((char) ((c & 63) | 128));
			} else {
				utftext.append((char) ((c >> 12) | 224));
				utftext.append((char) (((c >> 6) & 63) | 128));
				utftext.append((char) ((c & 63) | 128));
			}
		}
		return utftext;
	}

	private static StringBuilder _utf8_decode(StringBuilder utftext) {
		StringBuilder string = new StringBuilder();
		int i = 0;
		int c, c1, c2, c3 = 0;
		while (i < utftext.length()) {
			c = utftext.charAt(i);
			if (c < 128) {
				string.append((char) c);
				i++;
			}

			else if ((c > 191) && (c < 224)) {
				c2 = utftext.charAt(i + 1);
				string.append((char) (((c & 31) << 6) | (c2 & 63)));
				i += 2;
			} else {
				c2 = utftext.charAt(i + 1);
				c3 = utftext.charAt(i + 2);
				string.append((char) (((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)));
				i += 3;
			}
		}
		return string;
	}

	private static String fromCharCode(int... codePoints) {
	    return new String(codePoints, 0, codePoints.length);
	}
}
