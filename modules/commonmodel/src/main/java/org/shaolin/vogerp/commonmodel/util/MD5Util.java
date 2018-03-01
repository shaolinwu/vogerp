package org.shaolin.vogerp.commonmodel.util;

/**
 * JavaScript MD5 1.0.1
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 * 
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
public class MD5Util {

		/*
	    * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	    * to work around bugs in some JS interpreters.
	    */
	    public int safe_add(int x, int y) {
	        int lsw = (x & 0xFFFF) + (y & 0xFFFF),
	            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	        return (msw << 16) | (lsw & 0xFFFF);
	    }

	    /*
	    * Bitwise rotate a 32-bit number to the left.
	    */
	    public int bit_rol(int num, int cnt) {
	        return (num << cnt) | (num >>> (32 - cnt));
	    }

	    /*
	    * These publics implement the four basic operations the algorithm uses.
	    */
	    public int md5_cmn(int q, int a, int b, int x, int s, int t) {
	        return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	    }
	    public int md5_ff(int a, int b, int c, int d, int x, int s, int t) {
	        return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	    }
	    public int md5_gg(int a, int b, int c, int d, int x, int s, int t) {
	        return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	    }
	    public int md5_hh(int a, int b, int c, int d, int x, int s, int t) {
	        return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	    }
	    public int md5_ii(int a, int b, int c, int d, int x, int s, int t) {
	        return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	    }

	    /*
	    * Calculate the MD5 of an array of little-endian words, and a bit length.
	    */
	    public int[] binl_md5(int x[], int len) {
	        /* append padding */
	    		int end = (((len + 64) >>> 9) << 4) + 14;
    			int temp[] = new int[15];
    			System.arraycopy(x, 0, temp, 0, (x.length <= 15 ? x.length : 15));
    			x = temp;
	        x[len >> 5] |= 0x80 << (len % 32);
	        x[end] = len;
	        
	        int i, olda, oldb, oldc, oldd,
	            a =  1732584193,
	            b = -271733879,
	            c = -1732584194,
	            d =  271733878;

	        for (i = 0; i < x.length; i += 16) {
	            olda = a;
	            oldb = b;
	            oldc = c;
	            oldd = d;

	            a = md5_ff(a, b, c, d, x[i],       7, -680876936);
	            d = md5_ff(d, a, b, c, ((i +  1) < x.length) ? x[i +  1] : 0, 12, -389564586);
	            c = md5_ff(c, d, a, b, ((i +  2) < x.length) ? x[i +  2] : 0, 17,  606105819);
	            b = md5_ff(b, c, d, a, ((i +  3) < x.length) ? x[i +  3] : 0, 22, -1044525330);
	            a = md5_ff(a, b, c, d, ((i +  4) < x.length) ? x[i +  4] : 0,  7, -176418897);
	            d = md5_ff(d, a, b, c, ((i +  5) < x.length) ? x[i +  5] : 0, 12,  1200080426);
	            c = md5_ff(c, d, a, b, ((i +  6) < x.length) ? x[i +  6] : 0, 17, -1473231341);
	            b = md5_ff(b, c, d, a, ((i +  7) < x.length) ? x[i +  7] : 0, 22, -45705983);
	            a = md5_ff(a, b, c, d, ((i +  8) < x.length) ? x[i +  8] : 0,  7,  1770035416);
	            d = md5_ff(d, a, b, c, ((i +  9) < x.length) ? x[i +  9] : 0, 12, -1958414417);
	            c = md5_ff(c, d, a, b, ((i +  10) < x.length) ? x[i + 10] : 0, 17, -42063);
	            b = md5_ff(b, c, d, a, ((i +  11) < x.length) ? x[i + 11] : 0, 22, -1990404162);
	            a = md5_ff(a, b, c, d, ((i +  12) < x.length) ? x[i + 12] : 0,  7,  1804603682);
	            d = md5_ff(d, a, b, c, ((i +  13) < x.length) ? x[i + 13] : 0, 12, -40341101);
	            c = md5_ff(c, d, a, b, ((i +  14) < x.length) ? x[i + 14] : 0, 17, -1502002290);
	            b = md5_ff(b, c, d, a, ((i +  15) < x.length) ? x[i + 15] : 0, 22,  1236535329);

	            a = md5_gg(a, b, c, d, ((i +  1) < x.length) ? x[i +  1] : 0,  5, -165796510);
	            d = md5_gg(d, a, b, c, ((i +  6) < x.length) ? x[i +  6] : 0,  9, -1069501632);
	            c = md5_gg(c, d, a, b, ((i +  11) < x.length) ? x[i + 11] : 0, 14,  643717713);
	            b = md5_gg(b, c, d, a, ((i) < x.length) ? x[i] : 0,      20, -373897302);
	            a = md5_gg(a, b, c, d, ((i +  5) < x.length) ? x[i +  5] : 0,  5, -701558691);
	            d = md5_gg(d, a, b, c, ((i +  10) < x.length) ? x[i + 10] : 0,  9,  38016083);
	            c = md5_gg(c, d, a, b, ((i +  15) < x.length) ? x[i + 15] : 0, 14, -660478335);
	            b = md5_gg(b, c, d, a, ((i +  4) < x.length) ? x[i +  4] : 0, 20, -405537848);
	            a = md5_gg(a, b, c, d, ((i +  9) < x.length) ? x[i +  9] : 0,  5,  568446438);
	            d = md5_gg(d, a, b, c, ((i +  14) < x.length) ? x[i + 14] : 0,  9, -1019803690);
	            c = md5_gg(c, d, a, b, ((i +  3) < x.length) ? x[i +  3] : 0, 14, -187363961);
	            b = md5_gg(b, c, d, a, ((i +  8) < x.length) ? x[i +  8] : 0, 20,  1163531501);
	            a = md5_gg(a, b, c, d, ((i +  13) < x.length) ? x[i + 13] : 0,  5, -1444681467);
	            d = md5_gg(d, a, b, c, ((i +  2) < x.length) ? x[i +  2] : 0,  9, -51403784);
	            c = md5_gg(c, d, a, b, ((i +  7) < x.length) ? x[i +  7] : 0, 14,  1735328473);
	            b = md5_gg(b, c, d, a, ((i +  12) < x.length) ? x[i + 12] : 0, 20, -1926607734);

	            a = md5_hh(a, b, c, d, ((i +  5) < x.length) ? x[i +  5] : 0,  4, -378558);
	            d = md5_hh(d, a, b, c, ((i +  8) < x.length) ? x[i +  8] : 0, 11, -2022574463);
	            c = md5_hh(c, d, a, b, ((i +  11) < x.length) ? x[i + 11] : 0, 16,  1839030562);
	            b = md5_hh(b, c, d, a, ((i +  14) < x.length) ? x[i + 14] : 0, 23, -35309556);
	            a = md5_hh(a, b, c, d, ((i +  1) < x.length) ? x[i +  1] : 0,  4, -1530992060);
	            d = md5_hh(d, a, b, c, ((i +  4) < x.length) ? x[i +  4] : 0, 11,  1272893353);
	            c = md5_hh(c, d, a, b, ((i +  7) < x.length) ? x[i +  7] : 0, 16, -155497632);
	            b = md5_hh(b, c, d, a, ((i +  10) < x.length) ? x[i + 10] : 0, 23, -1094730640);
	            a = md5_hh(a, b, c, d, ((i +  13) < x.length) ? x[i + 13] : 0,  4,  681279174);
	            d = md5_hh(d, a, b, c, ((i) < x.length) ? x[i] : 0,      11, -358537222);
	            c = md5_hh(c, d, a, b, ((i +  3) < x.length) ? x[i +  3] : 0, 16, -722521979);
	            b = md5_hh(b, c, d, a, ((i +  6) < x.length) ? x[i +  6] : 0, 23,  76029189);
	            a = md5_hh(a, b, c, d, ((i +  9) < x.length) ? x[i +  9] : 0,  4, -640364487);
	            d = md5_hh(d, a, b, c, ((i +  12) < x.length) ? x[i + 12] : 0, 11, -421815835);
	            c = md5_hh(c, d, a, b, ((i +  15) < x.length) ? x[i + 15] : 0, 16,  530742520);
	            b = md5_hh(b, c, d, a, ((i +  2) < x.length) ? x[i +  2] : 0, 23, -995338651);

	            a = md5_ii(a, b, c, d, ((i) < x.length) ? x[i] : 0,       6, -198630844);
	            d = md5_ii(d, a, b, c, ((i +  7) < x.length) ? x[i +  7] : 0, 10,  1126891415);
	            c = md5_ii(c, d, a, b, ((i +  14) < x.length) ? x[i + 14] : 0, 15, -1416354905);
	            b = md5_ii(b, c, d, a, ((i +  5) < x.length) ? x[i +  5] : 0, 21, -57434055);
	            a = md5_ii(a, b, c, d, ((i +  12) < x.length) ? x[i + 12] : 0,  6,  1700485571);
	            d = md5_ii(d, a, b, c, ((i +  3) < x.length) ? x[i +  3] : 0, 10, -1894986606);
	            c = md5_ii(c, d, a, b, ((i +  10) < x.length) ? x[i + 10] : 0, 15, -1051523);
	            b = md5_ii(b, c, d, a, ((i +  1) < x.length) ? x[i +  1] : 0, 21, -2054922799);
	            a = md5_ii(a, b, c, d, ((i +  8) < x.length) ? x[i +  8] : 0,  6,  1873313359);
	            d = md5_ii(d, a, b, c, ((i +  15) < x.length) ? x[i + 15] : 0, 10, -30611744);
	            c = md5_ii(c, d, a, b, ((i +  6) < x.length) ? x[i +  6] : 0, 15, -1560198380);
	            b = md5_ii(b, c, d, a, ((i +  13) < x.length) ? x[i + 13] : 0, 21,  1309151649);
	            a = md5_ii(a, b, c, d, ((i +  4) < x.length) ? x[i +  4] : 0,  6, -145523070);
	            d = md5_ii(d, a, b, c, ((i +  11) < x.length) ? x[i + 11] : 0, 10, -1120210379);
	            c = md5_ii(c, d, a, b, ((i +  2) < x.length) ? x[i +  2] : 0, 15,  718787259);
	            b = md5_ii(b, c, d, a, ((i +  9) < x.length) ? x[i +  9] : 0, 21, -343485551);

	            a = safe_add(a, olda);
	            b = safe_add(b, oldb);
	            c = safe_add(c, oldc);
	            d = safe_add(d, oldd);
	        }
	        return new int[] {a, b, c, d};
	    }

	    public static String fromCharCode(int... codePoints) {
	        StringBuilder builder = new StringBuilder(codePoints.length);
	        for (int codePoint : codePoints) {
	            builder.append(Character.toChars(codePoint));
	        }
	        return builder.toString();
	    }
	    
	    /*
	    * Convert an array of little-endian words to a string
	    */
	    public String binl2rstr(int[] input) {
	        String output = "";
	        for (int i = 0; i < input.length * 32; i += 8) {
	            output += MD5Util.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xFF);
	        }
	        return output;
	    }

		public static String getUnicode(char c) {
			return String.valueOf((int) c);
		}
	    
	    /*
	    * Convert a raw string to an array of little-endian words
	    * Characters >255 have their high-byte silently ignored.
	    */
	    public int[] rstr2binl(String input) {
	        int[] output = new int[input.length()];
	        //output[(input.length() >> 2) - 1] = 0;
//	        for (int i = 0; i < output.length; i += 1) {
//	            output[i] = 0;
//	        }
	        for (int i = 0; i < input.length() * 8; i += 8) {
	            output[i >> 5] |= (input.charAt(i / 8) & 0xFF) << (i % 32);
	        }
	        return output;
	    }

	    /*
	    * Calculate the MD5 of a raw string
	    */
	    public String rstr_md5(String s) {
	        return binl2rstr(binl_md5(rstr2binl(s), s.length() * 8));
	    }

	    /*
	    * Calculate the HMAC-MD5, of a key and some data (raw strings)
	    */
	    public String rstr_hmac_md5(String key, String data) {
	    		int[] bkey = rstr2binl(key);
	    		int[] ipad = new int[15];
	    		int[] opad = new int[15];
	        //ipad[15] = opad[15] = undefined;
	        if (bkey.length > 16) {
	            bkey = binl_md5(bkey, key.length() * 8);
	        }
	        for (int i = 0; i < 16; i += 1) {
	            ipad[i] = bkey[i] ^ 0x36363636;
	            opad[i] = bkey[i] ^ 0x5C5C5C5C;
	        }
	        int[] rstr2binl = rstr2binl(data);
	        int[] ipads = new int[ipad.length + rstr2binl.length];
	        System.arraycopy(ipad, 0, ipads, 0, ipad.length);
	        System.arraycopy(rstr2binl, 0, ipads, ipad.length, rstr2binl.length);
	        int[] hash = binl_md5(ipads, 512 + data.length() * 8);
	        
	        int[] opads = new int[opad.length + hash.length];
	        System.arraycopy(opad.length, 0, opads, 0, opad.length);
	        System.arraycopy(hash, 0, opads, opad.length, hash.length);
	        return binl2rstr(binl_md5(opads, 512 + 128));
	    }

	    /*
	    * Convert a raw string to a hex string
	    */
	    public String rstr2hex(String input) {
	        String hex_tab = "0123456789abcdef";
	        StringBuffer output = new StringBuffer();
	        for (int i = 0; i < input.length(); i += 1) {
	        		int x = input.charAt(i);
	            output.append(hex_tab.charAt((x >>> 4) & 0x0F)).append(hex_tab.charAt(x & 0x0F));
	        }
	        return output.toString();
	    }

	    /*
	    * Encode a string as utf-8
	    */
	    public String str2rstr_utf8(String input) {
	        return input;
	    }

	    /*
	    * Take string arguments and return either raw or hex encoded strings
	    */
	    public String raw_md5(String s) {
	        return rstr_md5(str2rstr_utf8(s));
	    }
	    public String hex_md5(String s) {
	        return rstr2hex(raw_md5(s));
	    }
	    public String raw_hmac_md5(String k, String d) {
	        return rstr_hmac_md5(str2rstr_utf8(k), str2rstr_utf8(d));
	    }
	    public String hex_hmac_md5(String k, String d) {
	        return rstr2hex(raw_hmac_md5(k, d));
	    }

	    public String md5(String string) {
	    		return md5(string, null, false);
	    }
	    
	    public String md5(String string, String key, boolean raw) {
	        if (key == null) {
	            if (!raw) {
	                return hex_md5(string);
	            }
	            return raw_md5(string);
	        }
	        if (!raw) {
	            return hex_hmac_md5(key, string);
	        }
	        return raw_hmac_md5(key, string);
	    }
	
	    public static void main(String[] args) {
	    		MD5Util instance = new MD5Util();
	    		System.out.println(instance.md5("123456").equals("e10adc3949ba59abbe56e057f20f883e"));
	    		System.out.println(instance.md5("654321").equals("c33367701511b4f6020ec61ded352059"));
	    		System.out.println(instance.md5("abdcef").equals("37220eebb4b544705b49f200e7ef7ad7"));
	    		System.out.println(instance.md5("FWERfdfdsf@#$%&&1043243").equals("80e645484b3a7feafec2663822fe23bb"));
	    		System.out.println(instance.md5("TEGFD!@#234").equals("8c86ddc33847351e94a73358fd769eaa"));
	    		System.out.println(instance.md5("FWERfdfdsf@1043").equals("f211fa9758fef529fba8b98984704428"));
	    		
	    }
	    
}