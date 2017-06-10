package org.shaolin.vogerp.bbs.util;

import org.shaolin.vogerp.bbs.be.CommentImpl;

public class BBSUtil {

	public synchronized static String genResourceId() {
		return "bbs" + System.nanoTime();
	}
	
	public static void test() {
	}
}

