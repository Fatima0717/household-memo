document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateTotal);
});

// 削除ボタンのイベントリスナー
document.querySelectorAll('.remove-button').forEach(button => {
    button.addEventListener('click', removeItem);
});

// ランダムメッセージ付き項目を追加
document.getElementById('add-random').addEventListener('click', () => {
    const randomMessages = ['交際費', '医療費', '教育費', '日用品'];
    const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];

    const newExpense = document.createElement('div');
    newExpense.className = 'expense-item';
    newExpense.innerHTML = `
        <label>${randomMessage}：</label>
        <input type="number" placeholder="0" value="0">
        <button type="button" class="remove-button">削除</button>
    `;
    document.getElementById('expense-form').appendChild(newExpense);

    // 新しい要素にイベントを追加
    newExpense.querySelector('input[type="number"]').addEventListener('input', calculateTotal);
    newExpense.querySelector('.remove-button').addEventListener('click', removeItem);
});

// 合計を計算する関数
function calculateTotal() {
    let total = 0;
    document.querySelectorAll('input[type="number"]').forEach(input => {
        total += Number(input.value) || 0; // 数値として加算
    });
    document.getElementById('total').textContent = total.toLocaleString(); // 合計を表示
}

// 項目を削除する関数
function removeItem(event) {
    const item = event.target.closest('.expense-item');
    item.remove();
    calculateTotal(); // 削除後に再計算
}

// ページ読み込み時に合計を計算
calculateTotal();
