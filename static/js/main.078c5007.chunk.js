(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a,i,c,r,o,s=n(1),l=n.n(s),d=n(6),b=n.n(d),j=(n(18),n(2)),u=n(3),f=u.a.div(a||(a=Object(j.a)(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nmargin-top: 20px;\n"]))),h=n(8),v=n(9),O=n(10),p=n(12),g=n(11),x=u.a.ul(i||(i=Object(j.a)(["\nlist-style: none;\nmargin-top: 10px;\n"]))),m=u.a.li(c||(c=Object(j.a)(["\nfont-weight: 700;\ncolor: #fff;\n&:not(:last-child){\n    margin-bottom: 10px;\n}\n"]))),k=n(4),y=n.n(k),P=u.a.h1(r||(r=Object(j.a)(["\ncolor: #fff;\n"]))),V=u.a.div(o||(o=Object(j.a)(["\ndisplay: inline;\n"]))),w=n(0);function F(e){var t=e.title,n=e.children;return Object(w.jsxs)(V,{children:[Object(w.jsx)(P,{children:t}),n]})}var S=F;F.prototype={title:y.a.string.isRequired,children:y.a.node};var C,B,N=function(e){var t=e.good,n=e.neutral,a=e.bad,i=e.total,c=e.positivePercentage;return Object(w.jsx)(S,{title:"Statistics",children:Object(w.jsxs)(x,{children:[Object(w.jsxs)(m,{children:["Good: ",t]}),Object(w.jsxs)(m,{children:["Neutral: ",n]}),Object(w.jsxs)(m,{children:["Bad: ",a]}),Object(w.jsxs)(m,{children:["Total: ",i]}),Object(w.jsxs)(m,{children:["Positive feedback: ",c,"%"]})]})})},T=u.a.button(C||(C=Object(j.a)(["\ncolor: #fff;\nbackground-color: transparent;\nborder: 2px solid;\nborder-radius: 30%;\noutline: none;\n&:not(:last-child){\n    margin-right: 10px;\n}\n&:hover{\n    background-color:#f2f2f2 ;\n}\n"]))),q=u.a.div(B||(B=Object(j.a)(["\nmargin-top: 20px;\ndisplay: flex;\njustify-content: center;\n\npadding-bottom: 20px;\n"])));var G,J,L=function(e){var t=e.onLeaveFeedback;return Object(w.jsx)(S,{title:"Please leave feedback",children:Object(w.jsxs)(q,{children:[Object(w.jsx)(T,{name:"good",onClick:t,children:"Good"}),Object(w.jsx)(T,{name:"neutral",onClick:t,children:"Neutral"}),Object(w.jsx)(T,{name:"bad",onClick:t,children:"Bad"})]})})},M=u.a.div(G||(G=Object(j.a)(["\ndisplay: flex;\njustify-content: center;\n"]))),R=u.a.h2(J||(J=Object(j.a)(["\ncolor: #fff;\n"])));function A(e){var t=e.message;return Object(w.jsx)(M,{children:Object(w.jsx)(R,{children:t})})}var E=A;A.prototype={massage:y.a.string.isRequired};var I=function(e){Object(p.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={good:e.props.initialValue,neutral:e.props.initialValue,bad:e.props.initialValue,visible:!1},e.incrementStatistics=function(t){var n=t.target.name;e.setState((function(e){return Object(h.a)({},n,e[n]+1)})),e.changeVisible()},e.changeVisible=function(){e.setState({visible:!0})},e.countTotalFeedback=function(){var t=e.state,n=t.good,a=t.neutral;return n+t.bad+a},e.countPositiveFeedbackPercentage=function(t){var n=e.state.good;return Math.round(n/t*100)},e}return Object(O.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,i=e.visible,c=this.countTotalFeedback(),r=this.countPositiveFeedbackPercentage(c);return Object(w.jsxs)("div",{children:[Object(w.jsx)(L,{onLeaveFeedback:this.incrementStatistics}),!i&&Object(w.jsx)(E,{message:"No feedback given"}),i&&Object(w.jsx)(N,{good:t,neutral:n,bad:a,total:c,positivePercentage:r})]})}}]),n}(s.Component);I.defaultProps={initialValue:0};var z=I;var D=function(){return Object(w.jsx)(f,{children:Object(w.jsx)(z,{initialValue:0})})};n(25);var H=function(){return Object(w.jsx)(D,{})};b.a.render(Object(w.jsx)(l.a.StrictMode,{children:Object(w.jsx)(H,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.078c5007.chunk.js.map