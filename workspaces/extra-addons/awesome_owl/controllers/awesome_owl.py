from odoo import http
from odoo.http import request


class OwlPlayground(http.Controller):
    @http.route(["/awesome_owl"], type="http", auth="public")
    def show_playground(self):
        """
        Renders the owl playground page
        """
        return request.render("awesome_owl.playground")

    @http.route(["/todolist"], type="http", auth="public")
    def show_todolist(self):
        """
        Renders the owl playground page
        """
        return request.render("awesome_owl.todolist")
