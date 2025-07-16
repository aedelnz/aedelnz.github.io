/**
 * 游戏管理器
 */
function EquationGameManager() {
  this.resetState();
  this.cacheDOMElements();
  this.bindEvents();
  this.loadGameState();
}

// ------------------ 状态管理方法 ------------------
EquationGameManager.prototype.resetState = function() {
  this.equation = null; // {a, b, c, d, e, f} 形式为 ax + by = c, dx + ey = f
  this.solution = null; // {x, y}
  this.attempts = 0;
  this.level = 1;
  this.gameActive = false;
  this.maxCoefficient = 10; // 系数最大值
};

EquationGameManager.prototype.cacheDOMElements = function() {
  this.xInput = document.querySelector('.x-input');
  this.yInput = document.querySelector('.y-input');
  this.submitButton = document.querySelector('.submit-btn');
  this.message = document.querySelector('.game-message');
  this.attemptsDisplay = document.querySelector('.attempts-display');
  this.levelDisplay = document.querySelector('.level-display');
  this.equationDisplay1 = document.querySelector('.equation-1');
  this.equationDisplay2 = document.querySelector('.equation-2');
};

EquationGameManager.prototype.bindEvents = function() {
  this.handleSubmit = () => this.checkSolution();
  this.handleKeyPress = (e) => e.key === 'Enter' && this.checkSolution();
  
  this.submitButton.addEventListener('click', this.handleSubmit);
  this.xInput.addEventListener('keypress', this.handleKeyPress);
  this.yInput.addEventListener('keypress', this.handleKeyPress);
};

// ------------------ 游戏存储方法 ------------------
EquationGameManager.prototype.saveGameState = function() {
  const gameState = {
    equation: this.equation,
    solution: this.solution,
    attempts: this.attempts,
    level: this.level,
    maxCoefficient: this.maxCoefficient,
    gameActive: this.gameActive
  };
  
  try {
    localStorage.setItem('equationGameState', JSON.stringify(gameState));
  } catch (e) {
    console.error('保存失败:', e);
    mdui.snackbar('保存进度失败');
  }
};

EquationGameManager.prototype.loadGameState = function() {
  try {
    const savedState = localStorage.getItem('equationGameState');
    if (!savedState) return this.showWelcomeDialog();
    
    const gameState = JSON.parse(savedState);
    if (this.validateGameState(gameState)) {
      this.showResumeDialog(gameState);
    } else {
      throw new Error('无效状态');
    }
  } catch (e) {
    console.error('加载失败:', e);
    this.showCorruptedDataDialog();
  }
};

EquationGameManager.prototype.validateGameState = function(state) {
  return state && typeof state.level === 'number' &&
    typeof state.maxCoefficient === 'number' &&
    (!state.equation || (
      typeof state.equation === 'object' &&
      state.equation.a && state.equation.b && state.equation.c &&
      state.equation.d && state.equation.e && state.equation.f
    ));
};

// ------------------ 对话框方法 ------------------
EquationGameManager.prototype.showWelcomeDialog = function() {
  mdui.dialog({
    headline: '欢迎来到二元一次方程游戏!',
    description: '解出给定的二元一次方程组。',
    actions: [{
      text: "开始游戏",
      onClick: () => this.initNewGame()
    }]
  });
};

EquationGameManager.prototype.showResumeDialog = function(gameState) {
  mdui.dialog({
    headline: `检测到第${gameState.level}关存档`,
    description: `系数范围: -${gameState.maxCoefficient}到${gameState.maxCoefficient}`,
    actions: [
      { text: "恢复游戏", onClick: () => { Object.assign(this, gameState); this.startGame(); } },
      { text: "重新开始", onClick: () => { localStorage.removeItem('equationGameState'); this.initNewGame(); } }
    ]
  });
};

EquationGameManager.prototype.showCorruptedDataDialog = function() {
  mdui.dialog({
    headline: '存档损坏',
    description: '无法加载进度，将开始新游戏。',
    actions: [{
      text: "确定",
      onClick: () => { localStorage.removeItem('equationGameState'); this.initNewGame(); }
    }]
  });
};

// ------------------ 游戏逻辑方法 ------------------
EquationGameManager.prototype.initNewGame = function() {
  this.resetState();
  this.startGame();
};

EquationGameManager.prototype.startGame = function() {
  if (!this.equation) this.generateNewEquation();
  
  this.gameActive = true;
  this.updateUI();
  this.xInput.value = '';
  this.yInput.value = '';
  this.xInput.disabled = false;
  this.yInput.disabled = false;
  this.xInput.focus();
  this.saveGameState();
};

EquationGameManager.prototype.generateNewEquation = function() {
  // 生成整数解
  const x = Math.floor(Math.random() * this.maxCoefficient) - Math.floor(this.maxCoefficient / 2);
  const y = Math.floor(Math.random() * this.maxCoefficient) - Math.floor(this.maxCoefficient / 2);
  
  // 生成第一个方程 ax + by = c
  let a = Math.floor(Math.random() * this.maxCoefficient) + 1;
  let b = Math.floor(Math.random() * this.maxCoefficient) + 1;
  const c = a * x + b * y;
  
  // 生成第二个方程 dx + ey = f
  let d, e, f;
  do {
    d = Math.floor(Math.random() * this.maxCoefficient) + 1;
    e = Math.floor(Math.random() * this.maxCoefficient) + 1;
    f = d * x + e * y;
  } while (a * e === b * d); // 确保方程不平行
  
  this.equation = { a, b, c, d, e, f };
  this.solution = { x, y };
};

EquationGameManager.prototype.updateUI = function() {
  this.attemptsDisplay.textContent = `尝试次数: ${this.attempts}`;
  this.levelDisplay.textContent = `关卡: ${this.level}`;
  
  // 显示方程
  this.equationDisplay1.textContent = 
    `${this.equation.a}x ${this.equation.b >= 0 ? '+' : ''}${this.equation.b}y = ${this.equation.c}`;
  
  this.equationDisplay2.textContent = 
    `${this.equation.d}x ${this.equation.e >= 0 ? '+' : ''}${this.equation.e}y = ${this.equation.f}`;
  
  this.message.textContent = '';
};

EquationGameManager.prototype.checkSolution = function() {
  if (!this.gameActive) return;
  
  const userX = parseFloat(this.xInput.value);
  const userY = parseFloat(this.yInput.value);
  
  if (isNaN(userX) || isNaN(userY)) {
    this.showInvalidInputMessage();
    return;
  }
  
  this.processSolution(userX, userY);
};

EquationGameManager.prototype.showInvalidInputMessage = function() {
  this.message.textContent = '请输入有效的数字！';
  this.message.style.color = '#f44336';
  this.xInput.value = '';
  this.yInput.value = '';
  this.xInput.focus();
};

EquationGameManager.prototype.processSolution = function(userX, userY) {
  this.attempts++;
  this.updateUI();
  
  const eq1Result = this.equation.a * userX + this.equation.b * userY;
  const eq2Result = this.equation.d * userX + this.equation.e * userY;
  
  const tolerance = 0.001;
  const isCorrect = Math.abs(eq1Result - this.equation.c) < tolerance && 
                   Math.abs(eq2Result - this.equation.f) < tolerance;
  
  if (isCorrect) {
    this.handleCorrectSolution();
  } else {
    this.handleIncorrectSolution(eq1Result, eq2Result);
  }
  
  this.saveGameState();
};

EquationGameManager.prototype.handleCorrectSolution = function() {
  this.message.textContent = `正确！解是 x = ${this.solution.x}, y = ${this.solution.y}`;
  this.message.style.color = '#4CAF50';
  this.xInput.disabled = true;
  this.yInput.disabled = true;
  this.gameActive = false;
  
  mdui.dialog({
    headline: `第${this.level}关通过！`,
    description: `用了 ${this.attempts} 次尝试。`,
    actions: [
      { 
        text: "下一关", 
        onClick: () => {
          this.maxCoefficient += 5;
          this.level++;
          this.equation = null;
          this.startGame();
        }
      },
      { 
        text: "重新开始", 
        onClick: () => {
          localStorage.removeItem('equationGameState');
          this.initNewGame();
        }
      }
    ]
  });
};

EquationGameManager.prototype.handleIncorrectSolution = function(eq1Result, eq2Result) {
  const formatNumber = num => num % 1 === 0 ? num.toString() : num.toFixed(2);
  
  let message = '';
  if (Math.abs(eq1Result - this.equation.c) > 0.001) {
    message += `第一个方程不满足 (得到 ${formatNumber(eq1Result)} 而不是 ${formatNumber(this.equation.c)})`;
  }
  if (Math.abs(eq2Result - this.equation.f) > 0.001) {
    if (message) message += '\n';
    message += `第二个方程不满足 (得到 ${formatNumber(eq2Result)} 而不是 ${formatNumber(this.equation.f)})`;
  }
  
  this.message.textContent = message;
  this.message.style.color = '#FF9800';
  this.xInput.value = '';
  this.yInput.value = '';
  this.xInput.focus();
};

// ------------------ 清理方法 ------------------
EquationGameManager.prototype.destroy = function() {
  this.submitButton.removeEventListener('click', this.handleSubmit);
  this.xInput.removeEventListener('keypress', this.handleKeyPress);
  this.yInput.removeEventListener('keypress', this.handleKeyPress);
};

// ------------------ 游戏初始化 ------------------
let equationGameInstance = null;

function initializeEquationGame() {
  if (equationGameInstance) equationGameInstance.destroy();
  equationGameInstance = new EquationGameManager();
}

document.addEventListener('DOMContentLoaded', initializeEquationGame);
window.addEventListener('beforeunload', () => {
  if (equationGameInstance) equationGameInstance.destroy();
});
