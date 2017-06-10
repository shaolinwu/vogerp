package org.shaolin.vogerp.bbs.uiwidget;

import java.util.List;

import org.shaolin.uimaster.page.AjaxContext;
import org.shaolin.uimaster.page.UserRequestContext;
import org.shaolin.uimaster.page.cache.UIFormObject;
import org.shaolin.uimaster.page.widgets.HTMLWidgetType;
import org.shaolin.vogerp.bbs.be.IComment;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CommentListUI extends HTMLWidgetType {
	private static final long serialVersionUID = 1L;
	private static final Logger logger = LoggerFactory.getLogger(AjaxContext.class);
	
    public CommentListUI(String id)
    {
        super(id);
    }

	@Override
	public void generateBeginHTML(UserRequestContext context, UIFormObject ownerEntity, int depth) {
	}

	@Override
	public void generateEndHTML(UserRequestContext context, UIFormObject ownerEntity, int depth) {
		generateWidget(context);
		try {
			List<IComment> comments = (List<IComment>)this.getAttribute("commentList");
			for (IComment comment: comments) {
				context.generateHTML("<div>"+comment.getDescription()+"</div>");
			}
		} finally {
			generateEndWidget(context);
		}
	}
	
	
}
