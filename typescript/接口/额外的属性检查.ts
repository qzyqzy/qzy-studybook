interface LabelValue {
  label: string;
  value?: string;
}

function printLabel({ label, value }: LabelValue) {
  console.log(label + value);
}

printLabel({
  label: "q",
  name: "qzy",
} as LabelValue);
