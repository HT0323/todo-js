import "./styles.css";

const onClickAdd = () => {
  // テクストボックスの値を取り出し、フォームを初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  // 要素を未完了リストに追加
  createIncomplateList(inputText);
};

// 未完了リストから指定のタスクを削除
const deleteFromIncimplateList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加
const createIncomplateList = (text) => {
  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグを生成
  const li = document.createElement("li");
  li.innerText = text;

  // 完了ボタンタグを生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    // 完了したタスクを未完了リストから削除
    deleteFromIncimplateList(complateButton.parentNode);

    // タスクの内容を取得し、要素を初期化
    const addTarget = complateButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻るボタンを生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complate-list").removeChild(deleteTarget);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncomplateList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complate-list").appendChild(addTarget);
  });

  // 削除ボタンタグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncimplateList(deleteTarget);
  });

  // divタグの子要素を設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
