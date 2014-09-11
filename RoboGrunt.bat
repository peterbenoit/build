@echo off

SET src=c:\build_output\3.0
SET dest=\\APD-V-NCHM-VSS1\idk1\TemplatePackage\3.0
SET args=/E /XO /FFT /NP /XD ".git" ".svn" ".gitattributes" ".gitignore"

grunt && robocopy %src% %dest% %args%

REM rmdir %src% /S/Q && 
