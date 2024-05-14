export var DialogConfig = {
  hasBackdrop: true,
  closeOnBackdropClick: false,
  dialogClass: 'p-5'
}

export function ToTime(timeString) {
  var timeTokens = timeString.split(':');
  return new Date(2021, 0, 1, timeTokens[0], timeTokens[1], timeTokens[2]);
}

export function GetTeethList(){
  let list = [];
  for (let x = 1; x <= 4; x++) {
    // list.push(TeathCount);
  }
  return list;
}

export function SetSlectedTeeths(data, topTeethCount, bottomTeethCount){
  if (data && data.length > 0) {
    let selectedPosition;
    data.forEach(el => {
      if (el.position == "top-left" || el.position == "top-right") {
        selectedPosition = topTeethCount.find(x => x.position == el.position && x.no == el.no);
      } else {
        selectedPosition = bottomTeethCount.find(x => x.position == el.position && x.no == el.no);
      }
        selectedPosition.checked = true;
    })
  }
}

export function CalculateTotal(payments){
  let total = 0.00;
  payments.forEach(data => {
    total = total + Number(data.amount);
  })
  return total;
}
