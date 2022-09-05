let goldCoins = 0
const heroes = [
  {
    name: 'Fane',
    damage: 7,
    health: 100
  },
  {
    name: 'Red',
    damage: 10,
    health: 120
  }
]

const boss = {
  health: 200,
  maxHealth: 1000,
  damage: 25,
  level: 1
}

function heroesDoDmg() {
  heroes.forEach(hero => {
    if (hero.health > 0) {
      boss.health -= hero.damage
    }
    else {
      hero.damage == 0
    }
  })
  bossLevelUp()
  drawHP()

}

function drawHP() {
  // @ts-ignore
  document.getElementById('boss Hp').innerText = `Hp:${boss.health} Dmg:${boss.damage} Level-${boss.level}`


  heroes.forEach(hero => {
    let heroHp = document.getElementById(hero.name)

    if (hero.health < 0)
      hero.health = 0
    // @ts-ignore
    heroHp.querySelector('.hero').innerText = `${hero.name} Hp: ${hero.health}  Dmg:${hero.damage}`
  })
}

function bossDmg() {
  heroes.forEach(hero => {
    hero.health -= boss.damage
  })
  drawHP()
}

function bossLevelUp() {
  if (boss.health <= 0) {
    boss.damage += 20
    boss.health = 300 * boss.level
    boss.level++
    goldCoins += 100 * boss.level
  }
  drawHP()
  drawGoldCoins()
}

function drawGoldCoins() {
  // @ts-ignore
  document.getElementById('coins').innerText = `GoldCoins- ${goldCoins}`
}

function healthPotion(name) {
  let hero = heroes.find(hero => hero.name == name)
  // @ts-ignore
  if (hero.health > 0 && goldCoins > 99) {
    // @ts-ignore
    hero.health += 100
    goldCoins -= 100
    drawHP()
    drawGoldCoins()
  }
}

function damageUpgrade(name) {
  let hero = heroes.find(hero => hero.name == name)
  // @ts-ignore
  if (hero.health > 0 && goldCoins > 299) {
    // @ts-ignore
    hero.damage += 10
    goldCoins -= 300
    drawHP()
    drawGoldCoins()
  }

}

function reset() {
  // work in progress

}

setInterval(bossDmg, 10000)
drawHP()