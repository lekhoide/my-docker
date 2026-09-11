# -*- coding: utf-8 -*-
# from odoo import http


# class AwesomeClicker(http.Controller):
#     @http.route('/awesome_clicker/awesome_clicker', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/awesome_clicker/awesome_clicker/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('awesome_clicker.listing', {
#             'root': '/awesome_clicker/awesome_clicker',
#             'objects': http.request.env['awesome_clicker.awesome_clicker'].search([]),
#         })

#     @http.route('/awesome_clicker/awesome_clicker/objects/<model("awesome_clicker.awesome_clicker"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('awesome_clicker.object', {
#             'object': obj
#         })

