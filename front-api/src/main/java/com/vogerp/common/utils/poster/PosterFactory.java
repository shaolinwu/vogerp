package com.vogerp.common.utils.poster;

public class PosterFactory {
	
	public Poster createBigPoster(String regUrl) {
		Poster poster = new BigPoster();
		poster.setRegUrl(regUrl);
		return poster;
	}
	
	public Poster createEnPoster(String regUrl) {
		Poster poster = new EnPoster();
		poster.setRegUrl(regUrl);
		return poster;
	}
	
	public Poster createStdPoster(String regUrl) {
		Poster poster = new StdPoster();
		poster.setRegUrl(regUrl);
		return poster;
	}
	
	
}
