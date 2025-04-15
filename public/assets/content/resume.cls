\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{resume}[LaTeX class for building a resume.]
\LoadClass[paper=a4,fontsize=10pt]{article}
\RequirePackage{titlesec}
\RequirePackage{xcolor}
\RequirePackage{xhfill}
\RequirePackage{hyperref}

\pagestyle{empty}

\definecolor{gray}{HTML}{efefef}
\definecolor{blue}{HTML}{c9daf8}
\definecolor{pink}{HTML}{ead1dc}
\definecolor{black}{HTML}{000000}
\definecolor{white}{HTML}{ffffff}

\usepackage{xhfill}

\renewcommand{\labelitemi}{$\bullet$}
\newcommand\ruleafter[1]{#1~~\xhrulefill{black}{0.5em}}

\titleformat{\section}{\large\bfseries}{}{0em}{}[]
\titleformat{\subsection}{\large\scshape\raggedright}{}{0em}{}

\newcommand{\headerline}[1]{\section{\texorpdfstring{#1}{}}}
\newcommand{\cvsection}[1]{\section{\texorpdfstring{\ruleafter{#1}}{}}}
\newcommand{\cvpara}[1]{
  \begin{spacing}{1.5}
    #1
  \end{spacing}
}

\newcommand{\experience}[3]{\subsection{\texorpdfstring{
  \textbf{#1} \textit{#2} \hfill \colorbadge{black}{white}{#3}}{}
}}

\newcommand{\badge}[2]{\colorbox{#1}{\hspace{0.1em} #2 \hspace{0.1em}}}
\newcommand{\colorbadge}[3]{\colorbox{#1}{\hspace{0.1em} \color{#2} \textbf{#3} \hspace{0.1em}}}

\newcommand{\project}[2]{\begin{flushleft}{\badge{gray}{#1} #2} \end{flushleft} \vspace{0.1em}}
\newcommand{\tech}[1]{\begin{flushleft}{\colorbadge{black}{white}{Tech} #1}\end{flushleft}}

\newcommand{\work}[1]{
  \begin{flushleft}{
    \colorbadge{black}{white}{Work}
    \badge{gray}{\href{https://#1}{#1}}
  }\end{flushleft}
}
\newcommand{\education}[2]{
  \subsection[#1]{\textbf{#1} \hfill \colorbadge{black}{white}{#2}}
}

\newenvironment{absolutelynopagebreak}
  {\par\nobreak\vfil\penalty0\vfilneg
   \vtop\bgroup}
  {\par\xdef\tpd{\the\prevdepth}\egroup
   \prevdepth=\tpd}
