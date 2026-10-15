let subscriptions = [
  { subscriptionId: "SUB_001", customerName: "Nguyen Van A", planTier: "PERSONAL", deviceLimit: 3 },
  { subscriptionId: "SUB_002", customerName: "Tran Thi B", planTier: "FAMILY", deviceLimit: 5 }
];

// Hàm đơn nhiệm: Hiển thị danh sách thuê bao
function listSubscriptions() {
  if (subscriptions.length === 0) {
    console.log("Không có dữ liệu thuê bao!");
    return;
  }
  console.log("DANH SÁCH THUÊ BAO");
  subscriptions.forEach(sub => {
    console.log(`${sub.subscriptionId} | ${sub.customerName} | ${sub.planTier} | ${sub.deviceLimit} thiết bị`);
  });
}

function addSubscription() {
  const name = prompt("Nhập tên khách hàng:");
  if (!name) return;
  const plan = prompt("Chọn gói (PERSONAL / FAMILY):").toUpperCase();
  const limit = plan === "FAMILY" ? 5 : 3;
  const newSub = {
    subscriptionId: "SUB_00" + (subscriptions.length + 1),
    customerName: name.trim(),
    planTier: plan,
    deviceLimit: limit
  };
  subscriptions.push(newSub);
  console.log("Thêm thành công thuê bao mới!");
}
function displayMenu() {
  console.log("HỆ THỐNG QUẢN LÝ");
  console.log("1. Xem danh sách");
  console.log("2. Thêm thuê bao");
  console.log("0. Thoát");
}
function main() {
  let isRunning = true;
  do {
    displayMenu();
    const choice = prompt("Nhập lựa chọn:");
    if (choice === null) break;
        switch (Number(choice.trim())) {
      case 1:
        listSubscriptions();
        break;
      case 2:
        addSubscription();
        break;
      case 0:
        console.log("Thoát chương trình!");
        isRunning = false;
        break;
      default:
        console.log("Lựa chọn không hợp lệ!");
    }
  } while (isRunning);
}

main();