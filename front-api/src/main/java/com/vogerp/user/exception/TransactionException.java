package com.vogerp.user.exception;

/**
 * Spring transaction must be extent from RuntimeException.
 * 
 * @author shaolinwu
 *
 */
public class TransactionException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public TransactionException(String msg) {
        super(msg);
    }
}
