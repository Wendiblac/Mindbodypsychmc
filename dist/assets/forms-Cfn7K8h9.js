async function s(o){if(!(await fetch(o.action,{method:o.method||"POST",body:new FormData(o),headers:{Accept:"application/json"}})).ok)throw new Error("Form submission failed.")}export{s};
