<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
request.setCharacterEncoding("UTF-8");
String callback = request.getParameter("callback");
String name = request.getParameter("name");
String birth = request.getParameter("birthday");
String mili = request.getParameter("mili");
String career = request.getParameter("career");
String gender = request.getParameter("gender");
String age = request.getParameter("age");
String email = request.getParameter("email");
String url = request.getParameter("url");
String result = request.getParameter("result");
System.out.println(name + " " + birth + " " + mili + " " + 
career + " "+ gender + " "+age+" "+email+ " "+url+ " "+result );
if((name != null && name.length() > 0) && (birth != null && birth.length() > 0) && 
 (mili != null && mili.length() > 0) && (career != null && career.length() > 0) && 
 (email != null && email.length() > 0) && (url != null && url.length() > 0)){
%>
<%=callback %>({"success":"정상적으로 처리 되었습니다."})
<%}else{ %>
<%=callback %>({"failure":"다시 입력해주세요."})
<%}%>
