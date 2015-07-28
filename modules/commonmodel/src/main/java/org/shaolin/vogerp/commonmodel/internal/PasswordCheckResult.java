package org.shaolin.vogerp.commonmodel.internal;

public class PasswordCheckResult {

	private boolean isPassed = false;

	private String errorMsg = null;

	public PasswordCheckResult(boolean isPassed, String errorMsg) {
		this.isPassed = isPassed;
		this.errorMsg = errorMsg;
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public boolean isPassed() {
		return isPassed;
	}

}
