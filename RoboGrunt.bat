rmdir "c:\build_output\3.0" /S/Q && grunt && robocopy "c:\TemplatePackage\3.0" "\\APD-V-NCHM-VSS1\idk1\TemplatePackage\3.0" /S /XO /FFT /XD ".git" ".svn" ".gitattributes" ".gitignore"
