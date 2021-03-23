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

pagecode = '# -*- coding: utf-8 -*-'+nl+nl+
	'# Form implementation generated from reading ui file \'C:\\Users\\SAVIOUR\\Desktop\\untitled.ui\''+nl+
	'#'+nl+
	'# Created: Tue May 08 11:50:19 2012'+nl+
	'#      by: PyQt4 UI code generator 4.8.4'+nl+
	'#'+nl+
	'# WARNING! All changes made in this file will be lost!'+nl+nl+
	'from PyQt4 import QtCore, QtGui'+nl+nl+
	'try:'+nl+
	'    _fromUtf8 = QtCore.QString.fromUtf8'+nl+
	'except AttributeError:'+nl+
	'    _fromUtf8 = lambda s: s'+nl+nl+
	'class Ui_Dialog(object):'+nl+
	'    def setupUi(self, Dialog):'+nl+
	'        Dialog.setObjectName(_fromUtf8("Dialog"))'+nl+
	'        Dialog.resize(638, 324)'+nl+
	'        icon = QtGui.QIcon()'+nl+
	'        icon.addPixmap(QtGui.QPixmap(_fromUtf8("/images/icon.png")), QtGui.QIcon.Normal, QtGui.QIcon.Off)'+nl+
	'        Dialog.setWindowIcon(icon)'+nl+
	'        self.verticalLayout_2 = QtGui.QVBoxLayout(Dialog)'+nl+
	'        self.verticalLayout_2.setObjectName(_fromUtf8("verticalLayout_2"))'+nl+
	'        self.verticalLayout = QtGui.QVBoxLayout()'+nl+
	'        self.verticalLayout.setObjectName(_fromUtf8("verticalLayout"))'+nl+
	'        self.webView = QtWebKit.QWebView(Dialog)'+nl+
	'        self.webView.setObjectName(_fromUtf8("webView"))'+nl+
	'        self.verticalLayout.addWidget(self.webView)'+nl+
	'        self.horizontalLayout = QtGui.QHBoxLayout()'+nl+
	'        self.horizontalLayout.setObjectName(_fromUtf8("horizontalLayout"))'+nl+
	'        self.whats_new_check = QtGui.QCheckBox(Dialog)'+nl+
	'        self.whats_new_check.setObjectName(_fromUtf8("whats_new_check"))'+nl+
	'        self.horizontalLayout.addWidget(self.whats_new_check)'+nl+
	'        spacerItem = QtGui.QSpacerItem(40, 20, QtGui.QSizePolicy.Expanding, QtGui.QSizePolicy.Minimum)'+nl+
	'        self.horizontalLayout.addItem(spacerItem)'+nl+
	'        self.verticalLayout.addLayout(self.horizontalLayout)'+nl+
	'        self.verticalLayout_2.addLayout(self.verticalLayout)'+nl+nl+
	'        self.retranslateUi(Dialog)'+nl+
	'        QtCore.QMetaObject.connectSlotsByName(Dialog)'+nl+nl+
	'    def retranslateUi(self, Dialog):'+nl+
	'        Dialog.setWindowTitle(QtGui.QApplication.translate("Dialog", "Whats New", None, QtGui.QApplication.UnicodeUTF8))'+nl+
	'        self.whats_new_check.setText(QtGui.QApplication.translate("Dialog", "Dont show again until next update", None, QtGui.QApplication.UnicodeUTF8))'+nl+nl+
	'from PyQt4 import QtWebKit'+nl+
	''

document.write(pagecode);

</script>
