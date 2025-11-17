
    // Function to get query parameters from URL
    function getQueryParams() {
      const params = {};
      const search = window.location.search.substring(1); // Remove '?'
      const pairs = search.split("&");
      for (const pair of pairs) {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, " "));
      }
      return params;
    }

    // Display the form data
    const data = getQueryParams();
    const formDataDiv = document.getElementById("form-data");

    const fields = [
      { key: "firstName", label: "First Name" },
      { key: "lastName", label: "Last Name" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Mobile Number" },
      { key: "businessName", label: "Business/Organization Name" },
      { key: "membershipLevel", label: "Membership Level" },
      { key: "timestamp", label: "Application Date" }
    ];

    fields.forEach(field => {
      if (data[field.key]) {
        const p = document.createElement("p");
        p.innerHTML = `<span class="label">${field.label}:</span> ${data[field.key]}`;
        formDataDiv.appendChild(p);
      }
    });
  