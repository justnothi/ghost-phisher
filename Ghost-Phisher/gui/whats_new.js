<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = ''+nl+
	'import settings'+nl+
	'import whats_new_ui'+nl+nl+
	'from core import update'+nl+
	'from PyQt4 import QtGui,QtCore'+nl+nl+
	'whats_new_html = """<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">'+nl+
	'<html xmlns="http://www.w3.org/1999/xhtml">'+nl+
	'<head>'+nl+
	'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'+nl+
	'<title>Untitled Document</title>'+nl+
	'<style type="text/css">'+nl+
	'.Bigger {'+nl+
	'	font-size: 18px;'+nl+
	'	font-weight: bold;'+nl+
	'}'+nl+
	'.smaller {'+nl+
	'	font-size: 9px;'+nl+
	'}'+nl+
	'.smaller {'+nl+
	'	font-size: 14px;'+nl+
	'}'+nl+
	'</style></head>'+nl+
	'<body>'+nl+
	'<p class="Bigger"><strong>Whats New in Ghost Phisher %s</strong></p>'+nl+
	'<p class="smaller">* Bug Fixes (Dialog Controls)</p>'+nl+
	'</body>'+nl+
	'</html>'+nl+
	'"""'+nl+nl+nl+nl+
	'class whats_new_window(QtGui.QDialog,whats_new_ui.Ui_Dialog):'+nl+
	'    def __init__(self):'+nl+
	'        QtGui.QDialog.__init__(self)'+nl+nl+
	'        self.setupUi(self)'+nl+
	'        self.retranslateUi(self)'+nl+nl+
	'        self.update_value = update.update_class()'+nl+
	'        self.connect(self.whats_new_check,QtCore.SIGNAL("clicked()"),self.disable_check)'+nl+
	'        self.webView.setHtml(self.get_Update_Html())'+nl+nl+nl+
	'    def disable_check(self):'+nl+
	'        self.settings_object = settings.Ghost_settings()'+nl+
	'        if(self.whats_new_check.isChecked()):'+nl+
	'            self.settings_object.create_settings("disable whats new window","False")'+nl+
	'        else:'+nl+
	'            self.settings_object.create_settings("disable whats new window","True")'+nl+
	'        self.settings_object.close_setting_file()'+nl+nl+nl+
	'    def get_Update_Html(self):'+nl+
	'        html = whats_new_html % (str(self.update_value.current_version))'+nl+
	'        return(html)'

document.write(pagecode);

</script>
