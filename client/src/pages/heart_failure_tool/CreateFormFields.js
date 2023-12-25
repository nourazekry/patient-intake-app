const formData = [
    {
      "id": 1,
      "field": "name",
      "name": "Name",
      "type": "text",
      "required": 1,
      "category_id": 1,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 2,
      "field": "hospital_num",
      "name": "Hospital Number",
      "type": "num",
      "required": 1,
      "category_id": 1,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 3,
      "field": "type",
      "name": "Type",
      "type": "checkbox",
      "required": 0,
      "category_id": 1,
      "options": "In-hospital|Outpatient|Flu",
      "dependent_field_id_range": null
    },
    {
      "id": 4,
      "field": "date_of_birth",
      "name": "Date of Birth",
      "type": "date",
      "required": 0,
      "category_id": 1,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 5,
      "field": "national_id",
      "name": "National ID",
      "type": "text",
      "required": 0,
      "category_id": 1,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 6,
      "field": "postal_address",
      "name": "Postal Address",
      "type": "text",
      "required": 0,
      "category_id": 1,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 7,
      "field": "sex",
      "name": "Sex",
      "type": "checkbox",
      "required": 0,
      "category_id": 1,
      "options": "Male|Female",
      "dependent_field_id_range": null
    },
    {
      "id": 8,
      "field": "caregiver",
      "name": "Caregiver",
      "type": "checkbox",
      "required": 0,
      "category_id": 1,
      "options": "Spouse|Offspring|Other",
      "dependent_field_id_range": null
    },
    {
      "id": 9,
      "field": "mobile",
      "name": "Mobile",
      "type": "num",
      "required": 0,
      "category_id": 1,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 10,
      "field": "landline",
      "name": "Landline",
      "type": "num",
      "required": 0,
      "category_id": 1,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 11,
      "field": "date_of_visit",
      "name": "Date of Visit/Hospitalization",
      "type": "date",
      "required": 0,
      "category_id": 2,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 12,
      "field": "height",
      "name": "Height",
      "type": "num",
      "required": 0,
      "category_id": 2,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 13,
      "field": "weight",
      "name": "Weight",
      "type": "num",
      "required": 0,
      "category_id": 2,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 14,
      "field": "bmi",
      "name": "BMI",
      "type": "text",
      "required": 0,
      "category_id": 2,
      "options": "",
      "dependent_field_id_range": null
    },
    {
      "id": 15,
      "field": "literacy",
      "name": "Literacy",
      "type": "checkbox",
      "required": 0,
      "category_id": 2,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 16,
      "field": "hf_history",
      "name": "HF History",
      "type": "checkbox",
      "required": 0,
      "category_id": 2,
      "options": "No|Yes, with previous hospitalization|Yes, without previous hospitalization",
      "dependent_field_id_range": null
    },
    {
      "id": 17,
      "field": "hf_history_yes",
      "name": "If yes, with previous hospitalisation, Date of last hospitalisation",
      "type": "date",
      "required": 0,
      "category_id": 2,
      "options": null,
      "dependent_field_id_range": null
    },
    {
      "id": 18,
      "field": "heart rate",
      "name": "Heart Rate",
      "type": "num",
      "required": 0,
      "category_id": 2,
      "options": "",
      "dependent_field_id_range": null
    },
    {
      "id": 19,
      "field": "rhythm",
      "name": "Rhythm",
      "type": "checkbox",
      "required": 0,
      "category_id": 2,
      "options": "Sinus|Atrial Fibrillation|Other",
      "dependent_field_id_range": null
    },
    {
      "id": 20,
      "field": "blood_pressure",
      "name": "Blood Pressure (Systolic/Diastolic)",
      "type": "num",
      "required": 0,
      "category_id": 2,
      "options": "",
      "dependent_field_id_range": null
    },
    {
      "id": 21,
      "field": "primary_etiology",
      "name": "Primary Etiology",
      "type": "checkbox",
      "required": 0,
      "category_id": 2,
      "options": "Ischemic Heart Disease documented by coronary angiography|Ischemic Heart Disease not documented by coronary angiography|Hypertension|Dilated Cardiomyopathy|Valve Disease",
      "dependent_field_id_range": null
    },
    {
      "id": 22,
      "field": "rheumatic",
      "name": "Rheumatic",
      "type": "checkbox",
      "required": 0,
      "category_id": 2,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 23,
      "field": "mitral",
      "name": "Mitral",
      "type": "checkbox",
      "required": 0,
      "category_id": 2,
      "options": "Stenosis|Regurge",
      "dependent_field_id_range": null
    },
    {
      "id": 24,
      "field": "aortic",
      "name": "Aortic",
      "type": "checkbox",
      "required": 0,
      "category_id": 2,
      "options": "Stenosis|Regurge",
      "dependent_field_id_range": null
    },
    {
      "id": 25,
      "field": "tricuspid",
      "name": "Tricuspid",
      "type": "checkbox",
      "required": 0,
      "category_id": 2,
      "options": "Stenosis|Regurge",
      "dependent_field_id_range": null
    },
    {
      "id": 26,
      "field": "pulmonary",
      "name": "Pulmonary",
      "type": "checkbox",
      "required": 0,
      "category_id": 2,
      "options": "Stenosis|Regurge",
      "dependent_field_id_range": null
    },
    {
      "id": 27,
      "field": "myocardial_ischemia",
      "name": "Myocardial Ischemia",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 28,
      "field": "atrial_fibrillation",
      "name": "Atrial Fibrillation",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 29,
      "field": "infection",
      "name": "Infection",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 30,
      "field": "bradyarrhythmias",
      "name": "Bradyarrhythmias",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 31,
      "field": "iatrogenic",
      "name": "Iatrogenic",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 32,
      "field": "other",
      "name": "Other",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 33,
      "field": "acs",
      "name": "ACS",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 34,
      "field": "non_compliance",
      "name": "Non Compliance",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 35,
      "field": "ventricular_arrhythmia",
      "name": "Ventricular Arrhythmia",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 36,
      "field": "uncontrolled_hypertension",
      "name": "Uncontrolled Hypertension",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 37,
      "field": "renal_dysfunction",
      "name": "Renal Dysfunction",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 38,
      "field": "anaemia",
      "name": "Anaemia",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 39,
      "field": "diet_high_salt",
      "name": "Diet (High Salt)",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 40,
      "field": "hospital_presentation",
      "name": "Hospital Presentation, clinical profiles",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Pulmonary Oedema|Cardiogenic Shock|Decompensated HF|Hypertensive HF|Right HF|ACS/HF",
      "dependent_field_id_range": null
    },
    {
      "id": 41,
      "field": "intropic_support_type",
      "name": "Intropic Support Type",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "No|Dobutamine|Dopamine|Norepinephrine|Other",
      "dependent_field_id_range": null
    },
    {
      "id": 42,
      "field": "nitrates_iv",
      "name": "Nitrates IV",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 43,
      "field": "diuretics_iv",
      "name": "Diuretics IV",
      "type": "checkbox",
      "required": 0,
      "category_id": 3,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 69,
      "field": "risk_factors",
      "name": "Risk Factors",
      "type": "subcategory",
      "required": 1,
      "category_id": 4,
      "options": null,
      "dependent_field_id_range": "70-75"
    },
    {
      "id": 70,
      "field": "smoking_status",
      "name": "Smoking Status",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Never|Current|Former",
      "dependent_field_id_range": null
    },
    {
      "id": 71,
      "field": "atrial_fibrillation_risk_factors",
      "name": "Atrial Fibrillation",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "No|Permanent|Persistent|Paroxysmal",
      "dependent_field_id_range": null
    },
    {
      "id": 72,
      "field": "diabetes",
      "name": "Diabetes",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No|Newly Diagnosed",
      "dependent_field_id_range": null
    },
    {
      "id": 73,
      "field": "diabetes_if_yes",
      "name": "If Yes or Newly Diagnosed, Details",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Dietary Control|Oral Medication|Insulin|Oral and Insulin",
      "dependent_field_id_range": null
    },
    {
      "id": 74,
      "field": "alcohol",
      "name": "Alcohol",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Never|Former|Yes, sometimes|Yes, daily",
      "dependent_field_id_range": null
    },
    {
      "id": 75,
      "field": "hypertension_risk_factors",
      "name": "Hypertension",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 76,
      "field": "previous_and_current_condition",
      "name": "Previous and Current Condition",
      "type": "subcategory",
      "required": 1,
      "category_id": 4,
      "options": null,
      "dependent_field_id_range": "77-95"
    },
    {
      "id": 77,
      "field": "mi/angina",
      "name": "MI/Angina",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 78,
      "field": "pci",
      "name": "PCI",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 79,
      "field": "peripheral_vascular_disease",
      "name": "Peripheral Vascular Disease",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 80,
      "field": "hypertension_treatment",
      "name": "Hypertension Treatment",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 81,
      "field": "copd",
      "name": "COPD (Chronic Obstructive Pulmonary Disease)",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 82,
      "field": "current_malignant_disease",
      "name": "Current Malignant Disease (cancer)",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 83,
      "field": "depression",
      "name": "Depression",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 84,
      "field": "rheumatoid_arthritis",
      "name": "Rheumatoid Arthritis",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 85,
      "field": "cabg",
      "name": "CABG",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 86,
      "field": "stroke/tia",
      "name": "Stroke/TIA",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 87,
      "field": "valvular_surgery",
      "name": "Valvular Surgery",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 88,
      "field": "vte",
      "name": "VTE",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 89,
      "field": "chronic_kidney_dysfunction",
      "name": "Chronic Kidney Dysfunction",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 90,
      "field": "hepatic_dysfunction",
      "name": "Hepatic Dysfunction",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 91,
      "field": "parkinson",
      "name": "Parkinson",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 92,
      "field": "sleep_apnea",
      "name": "Sleep Apnea",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 93,
      "field": "device_therapy",
      "name": "Device Therapy",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "No|Pacemaker|CRT-P|CRT-D|ICD for primary prevention|ICD for secondary prevention",
      "dependent_field_id_range": null
    },
    {
      "id": 94,
      "field": "thyroid_dysfunction",
      "name": "Thyroid Dysfunction",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "No|Hypothyroidism|Hyperthyroidism",
      "dependent_field_id_range": null
    },
    {
      "id": 95,
      "field": "hepatitis",
      "name": "Hepatitis",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "No|A|B|C",
      "dependent_field_id_range": null
    },
    {
      "id": 98,
      "field": "electric_cardioversion",
      "name": "Electric Cardioversion",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Performed|Not Performed",
      "children": "99-100"
    },
    {
      "id": 99,
      "field": "atrial_fibrillation_cardioversion",
      "name": "Atrial Fibrillation",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": ""
    },
    {
      "id": 100,
      "field": "VT/VF",
      "name": "VT/VF",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Yes|No",
      "dependent_field_id_range": null
    },
    {
      "id": 107,
      "field": "crt_implantation",
      "name": "CRT Implantation",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": "Not Indicated|Indicated|Already Implanted",
      "children": 
        [
          {
            "id": 108,
            "field": "if_indicated_crt",
            "name": "If Indicated, treatment",
            "type": "checkbox",
            "required": 0,
            "category_id": 4,
            "options": "Not Planned|Planned",
            "dependent_field_id_range": null
          },
          {
            "id": 109,
            "field": "if_not_planned_crt",
            "name": "If Not Planned, treatment",
            "type": "checkbox",
            "required": 0,
            "category_id": 4,
            "options": "Absence of clinical indication|Cost Issues|Patient Refusal|Logistic Issues|Other",
            "dependent_field_id_range": null
          },
        ]
    },
    
    {
      "id": 110,
      "field": "icd_implantation",
      "name": "ICD Implantation",
      "type": "checkbox",
      "required": 0,
      "category_id": 4,
      "options": null,
      "children": [
        {
          "id": 111,
          "field": "if_indicated_icd",
          "name": "If Indicated, treatment",
          "type": "checkbox",
          "required": 0,
          "category_id": 4,
          "options": "Not Planned|Planned",
          "dependent_field_id_range": null
        },
        {
          "id": 112,
          "field": "if_not_planned_icd",
          "name": "If Not Planned, treatment",
          "type": "checkbox",
          "required": 0,
          "category_id": 4,
          "options": "Absence of clinical indication|Cost Issues|Patient Refusal|Logistic Issues|Other",
          "dependent_field_id_range": null
        }
      ]
    },
    
];

formData.forEach((result) => {
  if(!resultsMap[result.category_name]){
      resultsMap[result.category_name] = []; 
  }
  resultsMap[result.category_name].push(result);
  delete result.category_name;
});