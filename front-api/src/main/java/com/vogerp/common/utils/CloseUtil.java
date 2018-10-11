/*
* Copyright 2015 The UIMaster Project
*
* The UIMaster Project licenses this file to you under the Apache License,
* version 2.0 (the "License"); you may not use this file except in compliance
* with the License. You may obtain a copy of the License at:
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
* WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
* License for the specific language governing permissions and limitations
* under the License.
*/
package com.vogerp.common.utils;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.Reader;
import java.io.Writer;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.zip.ZipFile;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CloseUtil {
	
	private static final Logger logger = LoggerFactory.getLogger(CloseUtil.class);

	private CloseUtil() {
	}
	
	public static void close(Reader reader) {
		if (reader != null) {
			try {
				reader.close();
			} catch (IOException e) {
				if (logger.isDebugEnabled()) {
					logger.debug("Close reader:" + reader + " error", e);
				}
			}
		}
	}

	public static void close(Writer writer) {
		if (writer != null) {
			try {
				writer.close();
			} catch (IOException e) {
				if (logger.isDebugEnabled()) {
					logger.debug("Close writer:" + writer + " error", e);
				}
			}
		}
	}

	public static void close(InputStream ins) {
		if (ins != null) {
			try {
				ins.close();
			} catch (IOException e) {
				if (logger.isDebugEnabled()) {
					logger.debug("Close input stream:" + ins + " error", e);
				}
			}
		}
	}

	public static void close(OutputStream outs) {
		if (outs != null) {
			try {
				outs.close();
			} catch (IOException e) {
				if (logger.isDebugEnabled()) {
					logger.debug("Close output stream:" + outs + " error", e);
				}
			}
		}
	}

	public static void close(ResultSet rs) {
		if (rs != null) {
			try {
				rs.close();
			} catch (SQLException e) {
				if (logger.isDebugEnabled()) {
					logger.debug("Close result set:" + rs + " error", e);
				}
			}
		}
	}

	public static void close(Statement stmt) {
		if (stmt != null) {
			try {
				stmt.close();
			} catch (SQLException e) {
				if (logger.isDebugEnabled()) {
					logger.debug("Close statement:" + stmt + " error", e);
				}
			}
		}
	}

	public static void close(java.sql.Connection con) {
		if (con != null) {
			try {
				con.close();
			} catch (SQLException e) {
				if (logger.isDebugEnabled()) {
					logger.debug("Close connection:" + con + " error", e);
				}
			}
		}
	}

	public static void close(ZipFile zipFile) {
		if (zipFile != null) {
			try {
				zipFile.close();
			} catch (IOException e) {
				if (logger.isDebugEnabled()) {
					logger.debug("Close zip file:" + zipFile + " error", e);
				}
			}
		}
	}

}
