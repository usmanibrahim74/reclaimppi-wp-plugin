
import { reactive } from "vue";
import {years, name, dob} from "./options.json";
export default reactive({
    url: "https://app.donorcloud.co.uk/api/ReclaimPPI/lead",
    step: 1,
    loading: false,
    steps: [
        {title: "Criteria", number: 1 },
        {title: "PPI Claim Details", number: 2 },
        {title: "About You", number: 3 },
        {title: "Contact Details", number: 4 },
        {title: "Start Claim", number: 5 },
    ],
    form: [
      {
        self_assessment: null
      },
      {
        ...years,
        less_earning: null,
        ni_number: null,
        cant_remember: null,
      },
      {
        ...name,
        ...dob,
      },
      {
        email: null,
        phone: null,
        address: null,
        postcode: null,
        agree: null,
      },
      {
        referral_code: null,
        signature: null,
      },
    ],

  });
