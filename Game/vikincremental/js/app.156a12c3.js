(function(e) {
    function a(a) {
        for (var n, i, s = a[0], m = a[1], u = a[2], c = 0, d = []; c < s.length; c++) i = s[c], Object.prototype.hasOwnProperty.call(r, i) && r[i] && d.push(r[i][0]), r[i] = 0;
        for (n in m) Object.prototype.hasOwnProperty.call(m, n) && (e[n] = m[n]);
        l && l(a);
        while (d.length) d.shift()();
        return o.push.apply(o, u || []), t()
    }

    function t() {
        for (var e, a = 0; a < o.length; a++) {
            for (var t = o[a], n = !0, i = 1; i < t.length; i++) {
                var m = t[i];
                0 !== r[m] && (n = !1)
            }
            n && (o.splice(a--, 1), e = s(s.s = t[0]))
        }
        return e
    }
    var n = {},
        r = {
            app: 0
        },
        o = [];

    function i(e) {
        return s.p + "js/" + ({
            about: "about"
        } [e] || e) + "." + {
            about: "2e999d2e"
        } [e] + ".js"
    }

    function s(a) {
        if (n[a]) return n[a].exports;
        var t = n[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(t.exports, t, t.exports, s), t.l = !0, t.exports
    }
    s.e = function(e) {
        var a = [],
            t = r[e];
        if (0 !== t)
            if (t) a.push(t[2]);
            else {
                var n = new Promise((function(a, n) {
                    t = r[e] = [a, n]
                }));
                a.push(t[2] = n);
                var o, m = document.createElement("script");
                m.charset = "utf-8", m.timeout = 120, s.nc && m.setAttribute("nonce", s.nc), m.src = i(e);
                var u = new Error;
                o = function(a) {
                    m.onerror = m.onload = null, clearTimeout(c);
                    var t = r[e];
                    if (0 !== t) {
                        if (t) {
                            var n = a && ("load" === a.type ? "missing" : a.type),
                                o = a && a.target && a.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + n + ": " + o + ")", u.name = "ChunkLoadError", u.type = n, u.request = o, t[1](u)
                        }
                        r[e] = void 0
                    }
                };
                var c = setTimeout((function() {
                    o({
                        type: "timeout",
                        target: m
                    })
                }), 12e4);
                m.onerror = m.onload = o, document.head.appendChild(m)
            } return Promise.all(a)
    }, s.m = e, s.c = n, s.d = function(e, a, t) {
        s.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: t
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, a) {
        if (1 & a && (e = s(e)), 8 & a) return e;
        if (4 & a && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (s.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & a && "string" != typeof e)
            for (var n in e) s.d(t, n, function(a) {
                return e[a]
            }.bind(null, n));
        return t
    }, s.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(a, "a", a), a
    }, s.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, s.p = "/vikincremental/", s.oe = function(e) {
        throw console.error(e), e
    };
    var m = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = m.push.bind(m);
    m.push = a, m = m.slice();
    for (var c = 0; c < m.length; c++) a(m[c]);
    var l = u;
    o.push([0, "chunk-vendors"]), t()
})({
    0: function(e, a, t) {
        e.exports = t("56d7")
    },
    "04a5": function(e, a, t) {},
    "07a9": function(e) {
        e.exports = JSON.parse('[{"name":"Berries","stamina":5,"health":5,"amount":0},{"name":"Blueberries","stamina":10,"health":10,"amount":0},{"name":"Winterberries","stamina":20,"health":10,"amount":0},{"name":"Mushrooms","stamina":10,"health":5,"amount":0},{"name":"Yellow Mushrooms","stamina":15,"health":15,"amount":0},{"name":"Carrots","stamina":15,"health":15,"amount":0},{"name":"Carrot Soup","stamina":50,"health":30,"amount":0},{"name":"Turnips","stamina":15,"health":15,"amount":0},{"name":"Turnip Stew","stamina":50,"health":50,"amount":0},{"name":"Honey","stamina":15,"health":15,"amount":0},{"name":"Sweet Jam","stamina":30,"health":20,"amount":0},{"name":"Mead","stamina":60,"health":50,"amount":0},{"name":"Cooked Meat","stamina":20,"health":20,"amount":0},{"name":"Sausages","stamina":60,"health":40,"amount":0},{"name":"Cooked Fish","stamina":45,"health":25,"amount":0},{"name":"Fish Wraps","stamina":60,"health":60,"amount":0},{"name":"Large Game Meat","stamina":25,"health":60,"amount":0},{"name":"Meat Pie","stamina":60,"health":70,"amount":0},{"name":"Serpent Meat","stamina":25,"health":60,"amount":0},{"name":"Serpent Stew","stamina":80,"health":80,"amount":0},{"name":"Bread","stamina":70,"health":40,"amount":0}]')
    },
    "0ab2": function(e) {
        e.exports = JSON.parse('[{"name":"Stone Axe","components":[{"name":"Wood","amount":4},{"name":"Stone","amount":2}],"cost":1,"combat":{"damage":15,"stamina":15,"accuracy":0.75}},{"name":"Bronze Axe","addOnRequirements":["Forge Cooler"],"components":[{"name":"Wood","amount":8},{"name":"Tin Bar","amount":8},{"name":"Copper Bar","amount":8},{"name":"Leather Scraps","amount":20}],"cost":3,"combat":{"damage":20,"stamina":35,"accuracy":0.8}},{"name":"Iron Mace","addOnRequirements":["Smith\'s Anvil"],"components":[{"name":"Wood","amount":8},{"name":"Iron Bar","amount":15},{"name":"Leather Scraps","amount":20}],"cost":4,"combat":{"damage":30,"stamina":25,"accuracy":0.85}},{"name":"Steel Mace","addOnRequirements":["Blast Furnace"],"components":[{"name":"Wood","amount":8},{"name":"Steel Bar","amount":20},{"name":"Leather Scraps","amount":20}],"cost":5,"combat":{"damage":35,"stamina":30,"accuracy":0.85}},{"name":"Silver Sword","addOnRequirements":["Artisan Table"],"components":[{"name":"Wood","amount":8},{"name":"Silver Bar","amount":40},{"name":"Iron Bar","amount":5},{"name":"Leather Scraps","amount":20},{"name":"Ichor","amount":50},{"name":"Ichor Shard","amount":1}],"cost":6,"combat":{"damage":45,"stamina":30,"accuracy":0.85}},{"name":"Gold Spear","addOnRequirements":["Artisan Table"],"components":[{"name":"Hard Wood","amount":8},{"name":"Ornate Wood","amount":8},{"name":"Gold Bar","amount":40},{"name":"Iron Bar","amount":5},{"name":"Leather Scraps","amount":20},{"name":"Ichor","amount":100},{"name":"Ichor Shard","amount":1}],"cost":7,"combat":{"damage":60,"stamina":50,"accuracy":0.85}},{"name":"Titanium Sword","addOnRequirements":["Artisan Table"],"components":[{"name":"Hard Wood","amount":8},{"name":"Ornate Wood","amount":8},{"name":"Titanium Bar","amount":20},{"name":"Iron Bar","amount":5},{"name":"Leather Scraps","amount":20},{"name":"Ichor","amount":200},{"name":"Ichor Shard","amount":5},{"name":"Sharpening Stone","amount":1}],"cost":8,"combat":{"damage":100,"stamina":60,"accuracy":0.85}},{"name":"Crude Bow","addOnRequirements":["Workbench"],"components":[{"name":"Wood","amount":8}],"cost":1,"combat":{"damage":15,"stamina":10,"accuracy":0.65}},{"name":"Ornate Bow","addOnRequirements":["Adze"],"components":[{"name":"Ornate Wood","amount":8},{"name":"Leather Hide","amount":4},{"name":"Leather Scraps","amount":10}],"cost":2,"combat":{"damage":25,"stamina":35,"accuracy":0.65}},{"name":"Compound Bow","addOnRequirements":["Artisan Table"],"components":[{"name":"Ornate Wood","amount":8},{"name":"Leather Hide","amount":8},{"name":"Leather Scraps","amount":10},{"name":"Silver Bar","amount":10},{"name":"Ichor","amount":50},{"name":"Ichor Shard","amount":5}],"cost":5,"combat":{"damage":35,"stamina":15,"accuracy":0.65}},{"name":"Queen\'s Sting","addOnRequirements":["Artisan Table"],"components":[{"name":"Queen Bee","amount":25},{"name":"Ornate Wood","amount":500},{"name":"Titanium Bar","amount":50},{"name":"Leather Scraps","amount":100},{"name":"Ichor","amount":500},{"name":"Ichor Shard","amount":20},{"name":"Ikon of the Bounty","amount":10},{"name":"Mother\'s Memory","amount":1},{"name":"Sharpening Stone","amount":1}],"cost":20,"combat":{"damage":200,"stamina":40,"accuracy":0.65}},{"name":"Treebreaker","addOnRequirements":["Artisan Table"],"components":[{"name":"Hard Wood","amount":500},{"name":"Ornate Wood","amount":500},{"name":"Titanium Bar","amount":50},{"name":"Leather Scraps","amount":100},{"name":"Ichor","amount":500},{"name":"Ichor Shard","amount":10},{"name":"Ikon of Renewal","amount":10},{"name":"Eternal Blossom","amount":1},{"name":"Sharpening Stone","amount":1}],"cost":20,"combat":{"damage":300,"stamina":60,"accuracy":0.8}},{"name":"Plaguebite","addOnRequirements":["Artisan Table"],"components":[{"name":"Ornate Wood","amount":500},{"name":"Titanium Bar","amount":50},{"name":"Leather Scraps","amount":100},{"name":"Ichor","amount":500},{"name":"Ichor Shard","amount":10},{"name":"Ikon of Decay","amount":10},{"name":"Brackish Sludge","amount":1},{"name":"Sharpening Stone","amount":1}],"cost":20,"combat":{"damage":100,"stamina":25,"accuracy":0.95}},{"name":"Mountainspire","addOnRequirements":["Artisan Table"],"components":[{"name":"Hard Wood","amount":500},{"name":"Ornate Wood","amount":500},{"name":"Titanium Bar","amount":50},{"name":"Leather Scraps","amount":100},{"name":"Ichor","amount":500},{"name":"Ichor Shard","amount":10},{"name":"Ikon of Regret","amount":10},{"name":"Heart of the Mountain","amount":1},{"name":"Sharpening Stone","amount":1}],"cost":20,"combat":{"damage":400,"stamina":80,"accuracy":0.75}},{"name":"Galewind","addOnRequirements":["Artisan Table"],"components":[{"name":"Hard Wood","amount":500},{"name":"Ornate Wood","amount":500},{"name":"Titanium Bar","amount":50},{"name":"Leather Scraps","amount":100},{"name":"Ichor","amount":500},{"name":"Ichor Shard","amount":10},{"name":"Ikon of the Wind","amount":10},{"name":"Endless Breeze","amount":1},{"name":"Sharpening Stone","amount":1}],"cost":20,"combat":{"damage":300,"stamina":60,"accuracy":0.75}},{"name":"Sharptongue","addOnRequirements":["Artisan Table"],"components":[{"name":"Ornate Wood","amount":500},{"name":"Titanium Bar","amount":50},{"name":"Leather Scraps","amount":100},{"name":"Ichor","amount":500},{"name":"Ichor Shard","amount":10},{"name":"Ikon of Pride","amount":10},{"name":"Ancient Fragment","amount":1},{"name":"Sharpening Stone","amount":1}],"cost":20,"combat":{"damage":225,"stamina":35,"accuracy":0.85}},{"name":"Flametongue","addOnRequirements":["Artisan Table"],"components":[{"name":"Hard Wood","amount":500},{"name":"Ornate Wood","amount":500},{"name":"Titanium Bar","amount":50},{"name":"Dwarven Core","amount":150},{"name":"Leather Scraps","amount":100},{"name":"Ichor","amount":500},{"name":"Ichor Shard","amount":10},{"name":"Ikon of the Primordial","amount":10},{"name":"Endless Flame","amount":1},{"name":"Sharpening Stone","amount":1}],"cost":20,"combat":{"damage":200,"stamina":40,"accuracy":0.9}},{"name":"Leather Armor","addOnRequirements":["Tanning Rack"],"components":[{"name":"Leather Hide","amount":4},{"name":"Leather Scraps","amount":2},{"name":"Bones","amount":1}],"cost":1,"combat":null,"armorType":"Body","armor":4},{"name":"Leather Helmet","addOnRequirements":["Tanning Rack"],"components":[{"name":"Leather Hide","amount":2},{"name":"Leather Scraps","amount":2},{"name":"Bones","amount":1}],"cost":1,"combat":null,"armorType":"Head","armor":2},{"name":"Leather Greaves","addOnRequirements":["Tanning Rack"],"components":[{"name":"Leather Hide","amount":2},{"name":"Leather Scraps","amount":2},{"name":"Bones","amount":1}],"cost":1,"combat":null,"armorType":"Legs","armor":2},{"name":"Troll Armor","addOnRequirements":["Tanning Rack"],"bedRequirement":2,"components":[{"name":"Troll Hide","amount":5},{"name":"Leather Scraps","amount":5},{"name":"Bones","amount":2}],"cost":2,"combat":null,"armorType":"Body","armor":8},{"name":"Troll Helmet","addOnRequirements":["Tanning Rack"],"bedRequirement":2,"components":[{"name":"Troll Hide","amount":4},{"name":"Leather Scraps","amount":5},{"name":"Bones","amount":2}],"cost":2,"combat":null,"armorType":"Head","armor":4},{"name":"Troll Greaves","addOnRequirements":["Tanning Rack"],"bedRequirement":2,"components":[{"name":"Troll Hide","amount":2},{"name":"Leather Scraps","amount":5},{"name":"Bones","amount":2}],"cost":2,"combat":null,"armorType":"Legs","armor":4},{"name":"Bronze Armor","addOnRequirements":["Anvil"],"bedRequirement":2,"components":[{"name":"Leather Hide","amount":2},{"name":"Leather Scraps","amount":2},{"name":"Copper Bar","amount":8},{"name":"Tin Bar","amount":4}],"cost":3,"combat":null,"armorType":"Body","armor":10},{"name":"Bronze Helmet","addOnRequirements":["Anvil"],"bedRequirement":2,"components":[{"name":"Leather Hide","amount":2},{"name":"Leather Scraps","amount":2},{"name":"Copper Bar","amount":6},{"name":"Tin Bar","amount":3}],"cost":3,"combat":null,"armorType":"Head","armor":5},{"name":"Bronze Greaves","addOnRequirements":["Anvil"],"bedRequirement":2,"components":[{"name":"Leather Hide","amount":2},{"name":"Leather Scraps","amount":2},{"name":"Copper Bar","amount":4},{"name":"Tin Bar","amount":2}],"cost":3,"combat":null,"armorType":"Legs","armor":5},{"name":"Iron Armor","addOnRequirements":["Smith\'s Anvil"],"bedRequirement":2,"components":[{"name":"Leather Hide","amount":5},{"name":"Leather Scraps","amount":5},{"name":"Iron Bar","amount":10}],"cost":4,"combat":null,"armorType":"Body","armor":14},{"name":"Iron Helmet","addOnRequirements":["Smith\'s Anvil"],"bedRequirement":2,"components":[{"name":"Leather Hide","amount":5},{"name":"Leather Scraps","amount":5},{"name":"Iron Bar","amount":10}],"cost":4,"combat":null,"armorType":"Head","armor":7},{"name":"Iron Greaves","addOnRequirements":["Smith\'s Anvil"],"bedRequirement":2,"components":[{"name":"Leather Hide","amount":5},{"name":"Leather Scraps","amount":5},{"name":"Iron Bar","amount":10}],"cost":4,"combat":null,"armorType":"Legs","armor":7},{"name":"Steel Armor","addOnRequirements":["Blast Furnace"],"bedRequirement":2,"components":[{"name":"Wolf Hide","amount":5},{"name":"Leather Scraps","amount":10},{"name":"Steel Bar","amount":20}],"cost":5,"combat":null,"armorType":"Body","armor":18},{"name":"Steel Helmet","addOnRequirements":["Blast Furnace"],"bedRequirement":2,"components":[{"name":"Wolf Hide","amount":5},{"name":"Leather Scraps","amount":10},{"name":"Steel Bar","amount":20}],"cost":5,"combat":null,"armorType":"Head","armor":9},{"name":"Steel Greaves","addOnRequirements":["Blast Furnace"],"bedRequirement":2,"components":[{"name":"Wolf Hide","amount":5},{"name":"Leather Scraps","amount":10},{"name":"Steel Bar","amount":20}],"cost":5,"combat":null,"armorType":"Legs","armor":9},{"name":"Silver Armor","addOnRequirements":["Artisan Table"],"bedRequirement":2,"components":[{"name":"Tough Hide","amount":5},{"name":"Leather Scraps","amount":25},{"name":"Silver Bar","amount":20},{"name":"Threads","amount":20},{"name":"Ichor","amount":10}],"cost":6,"combat":null,"armorType":"Body","armor":22},{"name":"Silver Helmet","addOnRequirements":["Artisan Table"],"bedRequirement":2,"components":[{"name":"Tough Hide","amount":5},{"name":"Leather Scraps","amount":25},{"name":"Silver Bar","amount":20},{"name":"Threads","amount":20},{"name":"Ichor","amount":10}],"cost":6,"combat":null,"armorType":"Head","armor":11},{"name":"Silver Greaves","addOnRequirements":["Artisan Table"],"bedRequirement":2,"components":[{"name":"Tough Hide","amount":5},{"name":"Leather Scraps","amount":25},{"name":"Silver Bar","amount":20},{"name":"Threads","amount":20},{"name":"Ichor","amount":10}],"cost":6,"combat":null,"armorType":"Legs","armor":11},{"name":"Gold Armor","addOnRequirements":["Artisan Table"],"bedRequirement":2,"components":[{"name":"Tough Hide","amount":10},{"name":"Leather Scraps","amount":25},{"name":"Gold Bar","amount":20},{"name":"Threads","amount":20},{"name":"Ichor","amount":10},{"name":"Ichor Shard","amount":1}],"cost":7,"combat":null,"armorType":"Body","armor":26},{"name":"Gold Helmet","addOnRequirements":["Artisan Table"],"bedRequirement":2,"components":[{"name":"Tough Hide","amount":10},{"name":"Leather Scraps","amount":25},{"name":"Gold Bar","amount":20},{"name":"Threads","amount":20},{"name":"Ichor","amount":10},{"name":"Ichor Shard","amount":1}],"cost":7,"combat":null,"armorType":"Head","armor":13},{"name":"Gold Greaves","addOnRequirements":["Artisan Table"],"bedRequirement":2,"components":[{"name":"Tough Hide","amount":10},{"name":"Leather Scraps","amount":25},{"name":"Gold Bar","amount":20},{"name":"Threads","amount":20},{"name":"Ichor","amount":10},{"name":"Ichor Shard","amount":1}],"cost":7,"combat":null,"armorType":"Legs","armor":13},{"name":"Titanium Armor","addOnRequirements":["Artisan Table"],"bedRequirement":2,"components":[{"name":"Tough Hide","amount":20},{"name":"Leather Scraps","amount":25},{"name":"Titanium Bar","amount":20},{"name":"Threads","amount":20},{"name":"Ichor","amount":50},{"name":"Ichor Shard","amount":5}],"cost":8,"combat":null,"armorType":"Body","armor":30},{"name":"Titanium Helmet","addOnRequirements":["Artisan Table"],"bedRequirement":2,"components":[{"name":"Tough Hide","amount":20},{"name":"Leather Scraps","amount":25},{"name":"Titanium Bar","amount":20},{"name":"Threads","amount":20},{"name":"Ichor","amount":50},{"name":"Ichor Shard","amount":5}],"cost":8,"combat":null,"armorType":"Head","armor":15},{"name":"Titanium Greaves","addOnRequirements":["Artisan Table"],"bedRequirement":2,"components":[{"name":"Tough Hide","amount":20},{"name":"Leather Scraps","amount":25},{"name":"Titanium Bar","amount":20},{"name":"Threads","amount":20},{"name":"Ichor","amount":50},{"name":"Ichor Shard","amount":5}],"cost":8,"combat":null,"armorType":"Legs","armor":15},{"name":"Bone Pickaxe","addOnRequirements":["Workbench"],"components":[{"name":"Large Bone","amount":1},{"name":"Leather Scraps","amount":5},{"name":"Wood","amount":8}],"cost":3,"combat":null},{"name":"Bronze Pickaxe","addOnRequirements":["Anvil"],"components":[{"name":"Hard Wood","amount":5},{"name":"Leather Scraps","amount":5},{"name":"Copper Bar","amount":16},{"name":"Tin Bar","amount":8}],"cost":5,"combat":null},{"name":"Iron Pickaxe","addOnRequirements":["Smith\'s Anvil"],"components":[{"name":"Hard Wood","amount":5},{"name":"Leather Scraps","amount":5},{"name":"Iron Bar","amount":20}],"cost":7,"combat":null},{"name":"Cultivator","addOnRequirements":["Anvil"],"components":[{"name":"Hard Wood","amount":5},{"name":"Leather Scraps","amount":5},{"name":"Copper Bar","amount":8},{"name":"Tin Bar","amount":4}],"cost":5,"combat":null},{"name":"Fishing Rod","addOnRequirements":["Spinning Wheel"],"components":[{"name":"Ornate Wood","amount":8},{"name":"Leather Scraps","amount":5},{"name":"Threads","amount":25}],"cost":7,"combat":null},{"name":"Harpoon","addOnRequirements":["Spinning Wheel"],"components":[{"name":"Large Bone","amount":1},{"name":"Leather Scraps","amount":5},{"name":"Hard Wood","amount":8},{"name":"Threads","amount":100}],"cost":7,"combat":null}]')
    },
    1607: function(e, a, t) {
        "use strict";
        t("ad27")
    },
    "16b9": function(e, a, t) {},
    1779: function(e, a, t) {
        "use strict";
        t("ced6")
    },
    "1ef7": function(e, a, t) {
        "use strict";
        t("f968")
    },
    "271e": function(e, a, t) {
        "use strict";
        t("4572")
    },
    "297a": function(e) {
        e.exports = JSON.parse('[{"name":"The Mother","worldTier":0,"stamina":200,"health":300,"maxStamina":100,"maxHealth":300,"staminaRegen":2,"baseStaminaRegen":2,"healthRegen":0,"baseHealthRegen":0,"defeated":false,"components":[{"name":"Ikon of the Bounty","amount":1}],"attacks":[{"name":"Attack 1","damage":50,"stamina":30,"accuracy":0.15},{"name":"Attack 2","damage":30,"stamina":15,"accuracy":0.75},{"name":"Attack 2","damage":20,"stamina":10,"accuracy":0.75}],"artifacts":[{"name":"Mother\'s Memory","amount":1}],"drops":[{"name":"Ichor","amount":10},{"name":"Large Bone","amount":1}]},{"name":"The Stag","worldTier":1,"stamina":250,"health":800,"maxStamina":200,"maxHealth":800,"staminaRegen":4,"baseStaminaRegen":4,"healthRegen":0,"baseHealthRegen":0,"defeated":false,"components":[{"name":"Ikon of Renewal","amount":4}],"attacks":[{"name":"Attack 1","damage":100,"stamina":60,"accuracy":0.15},{"name":"Attack 2","damage":60,"stamina":20,"accuracy":0.75},{"name":"Attack 2","damage":45,"stamina":15,"accuracy":0.75}],"artifacts":[{"name":"Eternal Blossom","amount":1}],"drops":[{"name":"Ichor","amount":15}]},{"name":"The Plague","worldTier":2,"stamina":600,"health":1800,"maxStamina":600,"maxHealth":1800,"staminaRegen":12,"baseStaminaRegen":12,"healthRegen":0,"baseHealthRegen":0,"defeated":false,"components":[{"name":"Ikon of Decay","amount":6}],"attacks":[{"name":"Attack 1","damage":140,"stamina":80,"accuracy":0.15},{"name":"Attack 2","damage":75,"stamina":30,"accuracy":0.75},{"name":"Attack 2","damage":60,"stamina":20,"accuracy":0.75}],"artifacts":[{"name":"Brackish Sludge","amount":1}],"drops":[{"name":"Ichor","amount":20},{"name":"Sharpening Stone","amount":1}]},{"name":"The Citadel","worldTier":3,"stamina":750,"health":3500,"maxStamina":750,"maxHealth":3500,"staminaRegen":16,"baseStaminaRegen":16,"healthRegen":0,"baseHealthRegen":0,"defeated":false,"components":[{"name":"Ikon of Regret","amount":2}],"attacks":[{"name":"Attack 1","damage":160,"stamina":100,"accuracy":0.15},{"name":"Attack 2","damage":120,"stamina":50,"accuracy":0.75},{"name":"Attack 2","damage":100,"stamina":40,"accuracy":0.75}],"artifacts":[{"name":"Heart of the Mountain","amount":1}],"drops":[{"name":"Ichor","amount":25},{"name":"Ichor Shard","amount":1}]},{"name":"The Gale","worldTier":4,"stamina":2000,"health":7000,"maxStamina":2000,"maxHealth":7000,"staminaRegen":20,"baseStaminaRegen":20,"healthRegen":0,"baseHealthRegen":0,"defeated":false,"components":[{"name":"Ikon of the Wind","amount":2}],"attacks":[{"name":"Attack 1","damage":220,"stamina":150,"accuracy":0.25},{"name":"Attack 2","damage":190,"stamina":75,"accuracy":0.75}],"artifacts":[{"name":"Endless Breeze","amount":1}],"drops":[{"name":"Ichor","amount":30},{"name":"Ichor Shard","amount":2}]},{"name":"The Trickster","worldTier":5,"stamina":2500,"health":9000,"maxStamina":2500,"maxHealth":9000,"staminaRegen":30,"baseStaminaRegen":30,"healthRegen":0,"baseHealthRegen":0,"defeated":false,"components":[{"name":"Ikon of Pride","amount":2}],"attacks":[{"name":"Attack 1","damage":230,"stamina":200,"accuracy":0.15},{"name":"Attack 2","damage":150,"stamina":150,"accuracy":0.75},{"name":"Attack 2","damage":125,"stamina":50,"accuracy":0.75}],"artifacts":[{"name":"Ancient Fragment","amount":1}],"drops":[{"name":"Ichor","amount":50},{"name":"Ichor Shard","amount":3}]},{"name":"The Doomed God","worldTier":6,"stamina":4000,"health":30000,"maxStamina":4000,"maxHealth":30000,"staminaRegen":30,"baseStaminaRegen":30,"healthRegen":0,"baseHealthRegen":0,"defeated":false,"components":[{"name":"Ikon of the Primordial","amount":2}],"attacks":[{"name":"Attack 1","damage":320,"stamina":200,"accuracy":0.5},{"name":"Attack 2","damage":250,"stamina":150,"accuracy":0.8},{"name":"Attack 2","damage":200,"stamina":50,"accuracy":0.9}],"artifacts":[{"name":"Endless Flame","amount":1}],"drops":[{"name":"Ichor","amount":100},{"name":"Ichor Shard","amount":5}]},{"name":"The Allfather","worldTier":7,"stamina":5000,"health":40000,"maxStamina":5000,"maxHealth":40000,"staminaRegen":40,"baseStaminaRegen":40,"healthRegen":1,"baseHealthRegen":1,"defeated":false,"components":[],"attacks":[{"name":"Attack 1","damage":350,"stamina":200,"accuracy":0.25},{"name":"Attack 2","damage":300,"stamina":150,"accuracy":0.65},{"name":"Attack 2","damage":250,"stamina":50,"accuracy":0.9}],"artifacts":[],"drops":[{"name":"Ichor","amount":200},{"name":"Ichor Shard","amount":10}]}]')
    },
    4572: function(e, a, t) {},
    5265: function(e, a, t) {
        "use strict";
        t("16b9")
    },
    "55ee": function(e, a, t) {
        "use strict";
        t("04a5")
    },
    "56d7": function(e, a, t) {
        "use strict";
        t.r(a);
        t("e260"), t("e6cf"), t("cca6"), t("a79d");
        var n = t("2b0e"),
            r = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("router-view"), t("footer", {
                    staticClass: "footer"
                }, [t("div", {
                    staticClass: "content has-text-white"
                }, [t("div", {
                    staticClass: "container"
                }, [t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column"
                }, [t("div", [t("a", {
                    staticClass: "has-text-white",
                    attrs: {
                        href: "https://jixiejidiguan.top/A2zml",
                        target: "_blank"
                    }
                }, [t("b-icon", {
                    attrs: {
                        icon: ""
                    }
                }), t("span", [e._v("https://jixiejidiguan.top/A2zml")])], 1)]), t("div", [e._v("")]), e._m(0)])])])])])], 1)
            },
            o = [function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", [e._v(""), t("a", {
                    attrs: {
                        href: "",
                        target: "_blank"
                    }
                }, [e._v("")])])
            }],
            i = (t("1ef7"), t("2877")),
            s = {},
            m = Object(i["a"])(s, r, o, !1, null, "7298201e", null),
            u = m.exports,
            c = (t("d3b7"), t("3ca3"), t("ddb0"), t("8c4f")),
            l = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("section", {
                    staticClass: "container"
                }, [e.flags.gameStart ? t("game") : t("start")], 1)
            },
            d = [],
            h = t("5530"),
            p = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", [t("div", {
                    staticClass: "content"
                }, [t("h1", {
                    staticClass: "title p-4"
                }, [e._v(" Vikincrement"), t("b-button", {
                    staticClass: "is-pulled-right",
                    attrs: {
                        type: "is-danger"
                    },
                    on: {
                        click: function(a) {
                            return e.reset()
                        }
                    }
                }, [e._v("Reset")])], 1)]), t("div", {
                    staticClass: "columns mb-4"
                }, [t("div", {
                    staticClass: "column is-3 box mr-4"
                }, [t("div", {
                    staticClass: "subtitle"
                }, [e._v(" Day: " + e._s(e.day.totalDays) + " ( " + e._s(e.day.dayTicks) + " / " + e._s(e.day.dayLength) + ") "), t("b-button", {
                    staticClass: "is-pulled-right",
                    attrs: {
                        "icon-left": e.isPaused ? "play" : "pause",
                        type: e.isPaused ? "is-success is-light" : "is-warning is-light"
                    },
                    on: {
                        click: function(a) {
                            return e.setField({
                                name: "isPaused",
                                value: !e.isPaused
                            })
                        }
                    }
                }, [e._v(e._s(e.isPaused ? "Play" : "Pause"))])], 1), t("hr"), t("div", {
                    staticClass: "subtitle"
                }, [e._v(" Vikings: " + e._s(e.vikings.length) + " / " + e._s(e.house.beds || 1) + " ")]), t("div", [e._v("Exploring: " + e._s(e.biomes[e.worldTier].name))]), t("div", [e._v("World Tier: " + e._s(e.worldTier))]), t("div", [e._v(" Encounter Rate: " + e._s((100 * e.encounterChance).toFixed(2)) + "% / day ")])]), t("div", {
                    staticClass: "column box"
                }, [t("div", {
                    ref: "log",
                    staticClass: "log",
                    domProps: {
                        innerHTML: e._s(e.battleLog)
                    }
                })])]), t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column is-3 box mr-4"
                }, [t("inventory")], 1), t("div", {
                    staticClass: "column"
                }, [t("b-tabs", {
                    on: {
                        input: e.clearNewItem
                    },
                    model: {
                        value: e.tab,
                        callback: function(a) {
                            e.tab = a
                        },
                        expression: "tab"
                    }
                }, [t("b-tab-item", {
                    attrs: {
                        label: "Vikings",
                        value: "vikings"
                    }
                }, [t("combat"), e.combat ? e._e() : t("vikings")], 1), t("b-tab-item", {
                    attrs: {
                        label: "Housing",
                        value: "building",
                        icon: e.newHouse ? "alert-circle" : ""
                    }
                }, [t("b-field", [t("b-input", {
                    attrs: {
                        placeholder: "Search..."
                    },
                    model: {
                        value: e.search,
                        callback: function(a) {
                            e.search = a
                        },
                        expression: "search"
                    }
                })], 1), t("div", {
                    staticClass: "columns tab-container"
                }, [t("div", {
                    staticClass: "column"
                }, [t("houses")], 1), t("div", {
                    staticClass: "column"
                }, [t("fortifications", {
                    attrs: {
                        filter: e.search
                    }
                })], 1), t("div", {
                    staticClass: "column"
                }, [t("house-add-ons", {
                    attrs: {
                        type: "comfort",
                        label: "Decorations",
                        filter: e.search
                    }
                })], 1)])], 1), t("b-tab-item", {
                    attrs: {
                        label: "Workshop",
                        value: "workshop",
                        icon: e.newAddOn ? "alert-circle" : ""
                    }
                }, [t("b-field", [t("b-input", {
                    attrs: {
                        placeholder: "Search..."
                    },
                    model: {
                        value: e.search,
                        callback: function(a) {
                            e.search = a
                        },
                        expression: "search"
                    }
                })], 1), t("div", {
                    staticClass: "columns tab-container"
                }, [t("div", {
                    staticClass: "column"
                }, [t("house-add-ons", {
                    attrs: {
                        type: "workbench",
                        label: "Workbench",
                        filter: e.search
                    }
                })], 1), t("div", {
                    staticClass: "column"
                }, [t("house-add-ons", {
                    attrs: {
                        type: "forge",
                        label: "Forge",
                        filter: e.search
                    }
                })], 1), t("div", {
                    staticClass: "column"
                }, [t("house-add-ons", {
                    attrs: {
                        type: "processing",
                        label: "Processing",
                        filter: e.search
                    }
                })], 1)])], 1), t("b-tab-item", {
                    attrs: {
                        label: "Crafting",
                        value: "crafting",
                        icon: e.newCraft ? "alert-circle" : ""
                    }
                }, [t("b-field", [t("b-input", {
                    attrs: {
                        placeholder: "Search..."
                    },
                    model: {
                        value: e.search,
                        callback: function(a) {
                            e.search = a
                        },
                        expression: "search"
                    }
                })], 1), t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column"
                }, [t("gear", {
                    attrs: {
                        filter: e.search
                    }
                })], 1), t("div", {
                    staticClass: "column"
                }, [t("craftables", {
                    attrs: {
                        filter: e.search
                    }
                })], 1)])], 1), t("b-tab-item", {
                    attrs: {
                        label: "Proving Grounds",
                        value: "proving"
                    }
                }, [t("proving-grounds")], 1), t("b-tab-item", {
                    attrs: {
                        label: "Debug",
                        value: "debug"
                    }
                }, [t("b-field", {
                    attrs: {
                        label: "Item Rate Modifier"
                    }
                }, [t("b-input", {
                    model: {
                        value: e.itemRate,
                        callback: function(a) {
                            e.itemRate = a
                        },
                        expression: "itemRate"
                    }
                })], 1), t("b-button", {
                    attrs: {
                        type: "is-primary",
                        label: "Copy"
                    },
                    on: {
                        click: function(a) {
                            return e.copy(e.state)
                        }
                    }
                }), t("b-field", [t("b-input", {
                    attrs: {
                        type: "textarea"
                    },
                    on: {
                        input: function(a) {
                            return e.updateState()
                        }
                    },
                    model: {
                        value: e.newState,
                        callback: function(a) {
                            e.newState = a
                        },
                        expression: "newState"
                    }
                })], 1)], 1), t("b-tab-item", {
                    attrs: {
                        label: "Instruction Manual",
                        value: "howto"
                    }
                }, [t("dl", [t("dt", {
                    staticClass: "has-text-weight-bold subtitle mt-4"
                }, [e._v(" What is Vikincremental? ")]), t("dd", [e._v(" Vikincremental is part incremental/idle game, part text adventure, and part resource management game. Manage a party of vikings through treacherous lands by performing tasks, exploring dungeons, and challenging bosses."), t("br"), t("br"), e._v(" The original goal was to translate as much of Valheim as I could into a text-based incremental game. ")])]), t("dl", [t("dt", {
                    staticClass: "has-text-weight-bold subtitle mt-4"
                }, [e._v("The Day Cycle")]), t("dd", [e._v(" Vikincremental works on a day cycle of 24 hours. At the beginning of each day your vikings will rest, if able, restoring and improving their health and stamina for the day. Each viking will eat independently so make sure you have enough food for all. Resting is only possible with beds and a fire, so be sure to prioritize those items!"), t("br"), t("br"), e._v(" Also at the start of each day is the chance for a random enemy encounter. The encounter chance is based on the number of vikings in your party, as well as your comfort level and fortification level. ")])]), t("dl", [t("dt", {
                    staticClass: "has-text-weight-bold subtitle mt-4"
                }, [e._v("Housing")]), t("dd", [e._v(" Housing determines the maximum number of vikings available in your party. New houses will become available as your progress through the world. As you improve your housing, enemies will find you a more attractive target. ")]), t("dt", {
                    staticClass: "has-text-weight-bold"
                }, [e._v("Fortifications")]), t("dd", [e._v(" Fortifications mitigate the effects of a prosperous homestead. Although optional, it may be in your best interest to make your homestead as safe as possible. ")]), t("dt", {
                    staticClass: "has-text-weight-bold"
                }, [e._v("Decorations")]), t("dd", [e._v(" Decorations affect the comfort level and attractiveness of your homestead. Comfort affects the daily health and stamina regen bonuses provided to your vikings. ")])]), t("dl", [t("dt", {
                    staticClass: "has-text-weight-bold subtitle mt-4"
                }, [e._v("Workshop")]), t("dd", [e._v(" The workshop is where all of the tools to prosper can be found. ")]), t("dt", {
                    staticClass: "has-text-weight-bold"
                }, [e._v("Workbench")]), t("dd", [e._v("Pertains mostly to woodworking and other simple crafts.")]), t("dt", {
                    staticClass: "has-text-weight-bold"
                }, [e._v("Forge")]), t("dd", [e._v("The tools for smithing and crafting with metals.")]), t("dt", {
                    staticClass: "has-text-weight-bold"
                }, [e._v("Processing")]), t("dd", [e._v(" Tools that, if enabled, will automatically process resources based on pre-determined recipes. ")])]), t("dl", [t("dt", {
                    staticClass: "has-text-weight-bold subtitle mt-4"
                }, [e._v("Tasks")]), t("dd", [e._v(" Tasks are generally controlled by equipment, but in some cases certain workshop items must be built before a task can be used. Tasks use up stamina so balancing the work of each viking is vital to sucecss. "), t("br"), t("br"), e._v("Don't forget to check in on your vikings to see if new tasks have become available. ")])]), t("dl", [t("dt", {
                    staticClass: "has-text-weight-bold subtitle mt-4"
                }, [e._v(" Proving Grounds ")]), t("dd", [e._v(" The Proving Grounds are where vikings go to test their mettle. In Delves, vikings will explore randomly generated dungeons filled with treasure, enemies, and key items for facing each boss."), t("br"), t("br"), e._v(" Each biome tier has a unique boss that must be defeated before your party can move to the next area. Find the keys in Delves to be able to challenge each boss. ")])]), t("dl", [t("dt", {
                    staticClass: "has-text-weight-bold subtitle mt-4"
                }, [e._v(" The Cycle of Death and Rebirth ")]), t("dd", [e._v(" Death is not always a bad outcome of battle. As vikings perish, they will be placed on the corpse pile and remain unusable. Once all of your vikings perish, you have a chance to revive them with bonuses to health and stamina based on the number of bosses you have defeated this cycle."), t("br"), t("br"), e._v(" Reviving costs Ichor and increases with the power of your vikings. You are able to sell off gear you have accumulated in exchange for Ichor."), t("br"), t("br"), e._v(" After reviving your vikings, the world is reset back to the first biome, but your invintory and anything you have built remains. ")])])])], 1)], 1)]), t("b-modal", {
                    attrs: {
                        "can-cancel": !1,
                        "full-screen": ""
                    },
                    model: {
                        value: e.dead,
                        callback: function(a) {
                            e.dead = a
                        },
                        expression: "dead"
                    }
                }, [t("div", {
                    staticClass: "modal-card",
                    staticStyle: {
                        width: "auto"
                    }
                }, [t("header", {
                    staticClass: "modal-card-head"
                }, [t("p", {
                    staticClass: "modal-card-title"
                }, [e._v(e._s(e.deathHeader))]), t("button", {
                    staticClass: "delete",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(a) {
                            return e.clearDead()
                        }
                    }
                })]), t("section", {
                    staticClass: "modal-card-body"
                }, [t("div", [e._v(" Your bravery is not forgotten. You may choose to revive your vikings at a cost. Shed the burden of material possessions to ease the cost. ")]), t("div", [e._v("Ichor: " + e._s(e.ichor))]), t("b-tabs", {
                    on: {
                        input: e.clearNewItem
                    }
                }, [t("b-tab-item", {
                    attrs: {
                        label: "Vikings"
                    }
                }, e._l(e.ripVikings, (function(e, a) {
                    return t("div", {
                        key: a,
                        staticClass: "item"
                    }, [t("viking-death", {
                        attrs: {
                            item: e,
                            index: a
                        }
                    })], 1)
                })), 0), t("b-tab-item", {
                    attrs: {
                        label: "Gear"
                    }
                }, e._l(e.gear, (function(a, n) {
                    return t("div", {
                        key: n,
                        staticClass: "item"
                    }, [t("div", {
                        staticClass: "columns"
                    }, [t("div", {
                        staticClass: "column"
                    }, [e._v(e._s(a.name))]), t("div", {
                        staticClass: "column"
                    }, [e._v("Value: " + e._s(a.cost) + " Ichor")]), t("div", {
                        staticClass: "column"
                    }, [t("a", {
                        staticClass: "button is-small is-primary is-pulled-right",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.convertGear({
                                    item: a,
                                    index: n
                                })
                            }
                        }
                    }, [e._v("Convert")])])])])
                })), 0)], 1)], 1), t("footer", {
                    staticClass: "modal-card-foot"
                }, [t("b-button", {
                    attrs: {
                        label: "Close"
                    },
                    on: {
                        click: function(a) {
                            return e.clearDead()
                        }
                    }
                })], 1)])]), t("b-modal", {
                    attrs: {
                        "can-cancel": !1
                    },
                    model: {
                        value: e.win,
                        callback: function(a) {
                            e.win = a
                        },
                        expression: "win"
                    }
                }, [t("div", {
                    staticClass: "modal-card",
                    staticStyle: {
                        width: "auto"
                    }
                }, [t("header", {
                    staticClass: "modal-card-head"
                }, [t("p", {
                    staticClass: "modal-card-title"
                }, [e._v("Congratulations!")])]), t("section", {
                    staticClass: "modal-card-body has-text-centered"
                }, [t("div", [e._v(" You have earned your seat in the great meadhalls of Valhalla. ")]), t("div", [e._v(" We honor those who gave their all in the final battle: "), e._l(e.ripVikings, (function(a, n) {
                    return t("div", {
                        key: n
                    }, [t("div", {
                        staticClass: "is-size-4"
                    }, [e._v(e._s(a.name))]), t("div", [e._v("Born: Day " + e._s(a.birthday))]), t("div", [e._v("Died: Day " + e._s(e.day.totalDays))])])
                }))], 2), e.memorial.length ? t("div", [e._v(" We remember those who came along for the journey but were lost along the way: "), e._l(e.memorial, (function(a, n) {
                    return t("div", {
                        key: n
                    }, [t("div", {
                        staticClass: "subtitle"
                    }, [e._v(e._s(a.name))]), t("div", [e._v("Born: Day " + e._s(a.birthday))]), t("div", [e._v("Died: Day " + e._s(e.day.totalDays))])])
                }))], 2) : e._e()]), t("footer", {
                    staticClass: "modal-card-foot"
                }, [t("b-button", {
                    attrs: {
                        type: "is-danger"
                    },
                    on: {
                        click: function(a) {
                            return e.reset()
                        }
                    }
                }, [e._v("Reset")])], 1)])])], 1)
            },
            f = [],
            b = t("1da1"),
            g = (t("96cf"), t("2f62")),
            v = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("section", [t("panel", {
                    attrs: {
                        heading: "Vikings"
                    }
                }, [t("template", {
                    slot: "buttons"
                }, [e.showName ? e._e() : t("b-button", {
                    attrs: {
                        disabled: !e.canCreateViking,
                        type: e.canCreateViking ? "is-primary" : ""
                    },
                    on: {
                        click: function(a) {
                            e.showName = !0
                        }
                    }
                }, [e._v(" +1 Viking ")]), e.showName ? t("b-field", {
                    staticClass: "has-addons"
                }, [t("div", {
                    staticClass: "control"
                }, [t("b-input", {
                    attrs: {
                        placeholder: "State your name"
                    },
                    model: {
                        value: e.name,
                        callback: function(a) {
                            e.name = a
                        },
                        expression: "name"
                    }
                })], 1), t("div", {
                    staticClass: "control"
                }, [t("a", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(a) {
                            a.preventDefault(), e.showName = !1, e.createViking(e.name), e.name = e.randomName()
                        }
                    }
                }, [e._v("Summon")])])]) : e._e()], 1), t("template", {
                    slot: "content"
                }, e._l(e.vikings, (function(e, a) {
                    return t("div", {
                        key: a,
                        staticClass: "item"
                    }, [t("viking", {
                        attrs: {
                            item: e,
                            index: a
                        }
                    })], 1)
                })), 0)], 2), e.ripVikings.length ? t("panel", {
                    attrs: {
                        heading: "Corpse Pile"
                    }
                }, [t("template", {
                    slot: "content"
                }, e._l(e.ripVikings, (function(a, n) {
                    return t("div", {
                        key: n,
                        staticClass: "item"
                    }, [t("div", {
                        staticClass: "columns"
                    }, [t("div", {
                        staticClass: "column"
                    }, [t("div", [e._v(e._s(a.name))])])])])
                })), 0)], 2) : e._e()], 1)
            },
            y = [],
            k = (t("b0c0"), function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column"
                }, [t("div", [e._v(e._s(e.item.name))]), t("div", [t("b-progress", {
                    attrs: {
                        type: e.healthColor,
                        max: e.item.maxHealth,
                        value: e.item.health,
                        "show-value": ""
                    }
                }, [e._v(e._s(e.item.health) + " / " + e._s(e.item.maxHealth))])], 1), t("div", [e._v("Health Regen: " + e._s(e.item.healthRegen))]), t("div", [t("b-progress", {
                    attrs: {
                        type: "is-warning",
                        max: e.item.maxStamina,
                        value: e.item.stamina,
                        "show-value": ""
                    }
                }, [e._v(e._s(e.item.stamina) + " / " + e._s(e.item.maxStamina))])], 1), t("div", [e._v("Stamina Regen: " + e._s(e.item.staminaRegen))])]), t("div", {
                    staticClass: "column"
                }, e._l(e.usableTasks, (function(a) {
                    return t("div", {
                        key: a.name
                    }, [t("b-field", [t("b-checkbox", {
                        attrs: {
                            "native-value": a
                        },
                        model: {
                            value: e.item.tasks,
                            callback: function(a) {
                                e.$set(e.item, "tasks", a)
                            },
                            expression: "item.tasks"
                        }
                    }, [e._v(e._s(a.name) + " ")])], 1)], 1)
                })), 0), t("div", {
                    staticClass: "column"
                }, e._l(e.item.gear, (function(a, n) {
                    return t("div", {
                        key: n
                    }, [t("b-field", [e._v(" " + e._s(a.name) + " ( "), t("a", {
                        on: {
                            click: function(a) {
                                return a.preventDefault(), e.unequipGear({
                                    gearIndex: n,
                                    vikingIndex: e.index
                                })
                            }
                        }
                    }, [e._v("Remove")]), e._v(" ) ")])], 1)
                })), 0), t("div", {
                    staticClass: "column"
                }, [t("b-field", {
                    attrs: {
                        label: "Food preference"
                    }
                }, [t("div", {
                    staticClass: "control"
                }, [t("b-select", {
                    attrs: {
                        size: "is-small"
                    },
                    model: {
                        value: e.preference,
                        callback: function(a) {
                            e.preference = a
                        },
                        expression: "preference"
                    }
                }, [t("option", {
                    attrs: {
                        value: "best"
                    }
                }, [e._v("Best")]), t("option", {
                    attrs: {
                        value: "worst"
                    }
                }, [e._v("Worst")])])], 1)])], 1)])
            }),
            w = [],
            R = (t("a9e3"), t("2ef0")),
            x = {
                name: "Viking",
                data: function() {
                    return {}
                },
                props: {
                    item: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    },
                    index: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return 0
                        }
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["tasks", "worldTier", "houseAddOns"])), {}, {
                    healthColor: function() {
                        return this.item.health > this.item.maxHealth / 2 ? "is-success" : this.item.health > this.item.maxHealth / 4 ? "is-warning" : "is-danger"
                    },
                    preference: {
                        get: function() {
                            return this.item.foodPreference
                        },
                        set: function(e) {
                            this.item.foodPreference = e
                        }
                    },
                    usableTasks: function() {
                        var e = this,
                            a = R["filter"](this.tasks, (function(a) {
                                var t = !a.worldTier || a.worldTier <= e.worldTier,
                                    n = a.gearRequirements && 0 !== a.gearRequirements.length ? R["filter"](a.gearRequirements, (function(a) {
                                        return R["filter"](e.item.gear, (function(e) {
                                            return e.name === a
                                        })).length
                                    })).length : 1,
                                    r = !(a.addOnRequirements && a.addOnRequirements.length > 0 && e.houseAddOns) || R["filter"](a.addOnRequirements, (function(a) {
                                        return R["filter"](e.houseAddOns, (function(e) {
                                            return e.name === a && !0 === e.built
                                        })).length > 0
                                    })).length > 0;
                                return t && n > 0 && r
                            }));
                        return a
                    }
                }),
                methods: Object(h["a"])({}, Object(g["b"])(["unequipGear"]))
            },
            S = x,
            C = Object(i["a"])(S, k, w, !1, null, null, null),
            O = C.exports,
            T = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("section", {
                    staticClass: "box"
                }, [t("div", {
                    staticClass: "columns"
                }, [e.heading ? t("div", {
                    staticClass: "subtitle column"
                }, [e._v(" " + e._s(e.heading) + " ")]) : e._e(), e._t("buttons")], 2), e._t("content")], 2)
            },
            _ = [],
            I = {
                name: "Panel",
                props: {
                    heading: {
                        required: !1,
                        type: String
                    }
                }
            },
            q = I,
            j = Object(i["a"])(q, T, _, !1, null, null, null),
            H = j.exports,
            B = t("c75c"),
            L = t("c0a4"),
            A = {
                methods: {
                    notification: function(e) {
                        this.$buefy.notification.open({
                            message: e,
                            queue: !0,
                            duration: 5e3,
                            type: "is-info",
                            "has-icon": !0,
                            position: "is-top-right",
                            indefinite: !1
                        })
                    },
                    randomName: function() {
                        var e = this.randomIntFromInterval(0, L.length - 1),
                            a = this.randomIntFromInterval(0, B.length - 1);
                        return B[a] + " " + L[e]
                    },
                    findItem: function(e, a) {
                        var t = R["find"](e, (function(e) {
                            return e.name === a
                        }));
                        return t
                    },
                    findIndex: function(e, a) {
                        var t = R["findIndex"](e, (function(e) {
                            return e.name === a
                        }));
                        return t
                    },
                    hasRequirement: function(e) {
                        return e && e.length
                    },
                    randomIntFromInterval: function(e, a) {
                        return Math.floor(Math.random() * (a - e + 1) + e)
                    },
                    getWeapon: function(e) {
                        var a = R["orderBy"](R["filter"](e, (function(e) {
                            return e.combat && e.combat.damage
                        })), (function(e) {
                            return e.combat.damage
                        }), ["desc"]);
                        return a.length ? a[0] : {
                            name: "Bare Fists",
                            combat: {
                                damage: 5,
                                stamina: 5,
                                accuracy: .95
                            }
                        }
                    },
                    getArmor: function(e) {
                        var a = R["orderBy"](R["filter"](e, (function(e) {
                                return e.armorType && "Head" === e.armorType
                            })), (function(e) {
                                return e.armor
                            }), ["desc"])[0],
                            t = R["orderBy"](R["filter"](e, (function(e) {
                                return e.armorType && "Body" === e.armorType
                            })), (function(e) {
                                return e.armor
                            }), ["desc"])[0],
                            n = R["orderBy"](R["filter"](e, (function(e) {
                                return e.armorType && "Legs" === e.armorType
                            })), (function(e) {
                                return e.armor
                            }), ["desc"])[0],
                            r = a ? a.armor : 0,
                            o = t ? t.armor : 0,
                            i = n ? n.armor : 0,
                            s = r + o + i;
                        return {
                            armorTotal: s,
                            armor: [a, t, n]
                        }
                    },
                    requirementsMet: function(e, a, t) {
                        var n = this,
                            r = !(e.gearRequirements && e.gearRequirements.length > 0) || R["filter"](e.gearRequirements, (function(e) {
                                return R["filter"](n.gear, (function(a) {
                                    return a.name === e
                                })).length > 0
                            })).length > 0,
                            o = !(e.addOnRequirements && e.addOnRequirements.length > 0 && t) || R["filter"](e.addOnRequirements, (function(e) {
                                return R["filter"](t, (function(a) {
                                    return a.name === e && !0 === a.built
                                })).length > 0
                            })).length > 0,
                            i = null === this.worldTier || !e.tierRequirement || this.worldTier >= e.tierRequirement,
                            s = !a || !e.bedRequirement || e.bedRequirement <= a.beds;
                        return s && o && r && i
                    },
                    craftable: function(e) {
                        var a = this,
                            t = !(e.components && e.components.length > 0) || R["filter"](e.components, (function(e) {
                                var t = {};
                                return t = e.type && "food" === e.type ? a.findItem(a.food, e.name) : a.findItem(a.inventory, e.name), t && t.amount >= e.amount
                            })).length === e.components.length;
                        return t
                    }
                }
            },
            W = {
                name: "Vikings",
                data: function() {
                    return {
                        showName: !1,
                        name: ""
                    }
                },
                mixins: [A],
                components: {
                    Viking: O,
                    Panel: H
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["vikings", "ripVikings", "maxVikings", "house"])), {}, {
                    canCreateViking: function() {
                        return !(this.vikings.length + this.ripVikings.length >= this.maxVikings) && !(this.vikings.length + this.ripVikings.length >= this.house.beds && this.vikings.length >= 1)
                    }
                }),
                methods: Object(h["a"])({}, Object(g["b"])(["createViking", "burnViking"])),
                created: function() {
                    this.name = this.randomName()
                }
            },
            D = W,
            F = Object(i["a"])(D, v, y, !1, null, null, null),
            M = F.exports,
            P = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", [t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column"
                }, [t("div", {
                    staticClass: "subtitle"
                }, [e._v(e._s(e.item.name))])]), t("div", {
                    staticClass: "column"
                }, [t("b-tooltip", {
                    staticClass: "is-pulled-right",
                    attrs: {
                        label: "Bring this viking back to the realm of the living, at a cost.",
                        type: "is-primary is-light"
                    }
                }, [t("b-button", {
                    attrs: {
                        type: "is-danger",
                        disabled: e.ichor < e.cost
                    },
                    on: {
                        click: function(a) {
                            return e.reviveViking({
                                viking: e.item,
                                cost: e.cost
                            })
                        }
                    }
                }, [e._v(e._s(e.cost) + " Ichor")])], 1)], 1)]), t("div", [e._v(" If revived, gets " + e._s(e.item.bossesDefeated) + " points to maximum health and maximum stamina. ")]), e._l(e.item.gear, (function(a, n) {
                    return t("div", {
                        key: n,
                        staticClass: "item"
                    }, [t("div", {
                        staticClass: "columns"
                    }, [t("div", {
                        staticClass: "column"
                    }, [e._v(e._s(a.name))]), t("div", {
                        staticClass: "column"
                    }, [e._v("Value: " + e._s(a.cost) + " Ichor")]), t("div", {
                        staticClass: "column"
                    }, [t("a", {
                        staticClass: "button is-small is-primary is-pulled-right",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.convertVikingGear({
                                    item: a,
                                    gearIndex: n,
                                    vikingIndex: e.index
                                })
                            }
                        }
                    }, [e._v("Convert")])])])])
                }))], 2)
            },
            G = [],
            V = {
                name: "VikingDeath",
                data: function() {
                    return {}
                },
                mixins: [A],
                props: {
                    item: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    },
                    index: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return 0
                        }
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["inventory"])), {}, {
                    cost: function() {
                        return Math.floor(this.item.baseHealth + this.item.bossesDefeated)
                    },
                    ichor: function() {
                        return this.findItem(this.inventory, "Ichor").amount
                    }
                }),
                methods: Object(h["a"])({}, Object(g["b"])(["destroyVikingGear", "reviveViking", "convertVikingGear"]))
            },
            E = V,
            z = Object(i["a"])(E, P, G, !1, null, null, null),
            N = z.exports,
            $ = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("section", [t("b-field", [t("b-input", {
                    attrs: {
                        placeholder: "Search..."
                    },
                    model: {
                        value: e.search,
                        callback: function(a) {
                            e.search = a
                        },
                        expression: "search"
                    }
                })], 1), t("div", {
                    staticClass: "subtitle"
                }, [e._v("Inventory")]), e._l(e.items, (function(a, n) {
                    return [Math.floor(a.amount) >= 1 ? t("div", {
                        key: n,
                        staticClass: "item"
                    }, [e._v(" " + e._s(a.name) + ": " + e._s(Math.floor(a.amount)) + " ")]) : e._e()]
                })), t("div", {
                    staticClass: "subtitle"
                }, [e._v("Food")]), e._l(e.foodItems, (function(a, n) {
                    return [Math.floor(a.amount) >= 1 ? t("div", {
                        key: "food" + n,
                        staticClass: "item"
                    }, [e._v(" " + e._s(a.name) + ": " + e._s(Math.floor(a.amount)) + " ")]) : e._e()]
                }))], 2)
            },
            K = [],
            Y = (t("ac1f"), t("841c"), t("caad"), t("2532"), {
                name: "Inventory",
                data: function() {
                    return {
                        search: ""
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["inventory", "food"])), {}, {
                    items: function() {
                        var e = this;
                        return "" != this.search ? R["filter"](this.inventory, (function(a) {
                            return a.name.toLowerCase().includes(e.search.toLowerCase())
                        })) : this.inventory
                    },
                    foodItems: function() {
                        var e = this;
                        return "" != this.search ? R["filter"](this.food, (function(a) {
                            return a.name.toLowerCase().includes(e.search.toLowerCase())
                        })) : this.food
                    }
                })
            }),
            J = Y,
            X = Object(i["a"])(J, $, K, !1, null, null, null),
            U = X.exports,
            Q = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("section", [t("panel", {
                    attrs: {
                        heading: "Craftables"
                    }
                }, [t("template", {
                    slot: "content"
                }, e._l(e.items, (function(e, a) {
                    return t("div", {
                        key: a,
                        staticClass: "item"
                    }, [t("craftable", {
                        attrs: {
                            item: e
                        }
                    })], 1)
                })), 0)], 2)], 1)
            },
            Z = [],
            ee = (t("4de4"), function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return e.unlocked ? t("div", [t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column"
                }, [t("div", [t("b-tooltip", {
                    attrs: {
                        position: "is-bottom",
                        multilined: "",
                        dashed: ""
                    },
                    scopedSlots: e._u([{
                        key: "content",
                        fn: function() {
                            return [e.item.tooltip ? t("div", [e._v(" " + e._s(e.item.tooltip) + " ")]) : e._e(), e.item.combat ? t("div", [t("div", [e._v("Damage: " + e._s(e.item.combat.damage))]), t("div", [e._v("Stamina: " + e._s(e.item.combat.stamina))]), t("div", [e._v("Acc: " + e._s(e.item.combat.accuracy))])]) : e._e(), e.item.armorType ? t("div", [t("div", [e._v(e._s(e.item.armorType) + ", " + e._s(e.item.armor) + " armor")])]) : e._e()]
                        },
                        proxy: !0
                    }], null, !1, 932445432)
                }, [e._v(" " + e._s(e.item.name) + " ")])], 1)]), t("div", {
                    staticClass: "column is-6"
                }, e._l(e.item.components, (function(e) {
                    return t("div", {
                        key: e.name
                    }, [t("crafting-component", {
                        attrs: {
                            component: e
                        }
                    })], 1)
                })), 0), t("div", {
                    staticClass: "column has-text-right is-2"
                }, [t("b-button", {
                    attrs: {
                        size: "is-small",
                        disabled: !e.canCraft,
                        type: e.canCraft ? "is-success" : ""
                    },
                    on: {
                        click: function(a) {
                            return e.craftGear(e.item)
                        }
                    }
                }, [e._v("Craft")])], 1)])]) : e._e()
            }),
            ae = [],
            te = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", [t("dl", {
                    staticClass: "columns component"
                }, [t("dt", {
                    staticClass: "column is-7"
                }, [e._v(e._s(e.component.name) + ":")]), t("dd", {
                    staticClass: "column has-text-right"
                }, [t("span", {
                    class: e.availableClass
                }, [e._v(e._s(e.available))]), e._v(" / " + e._s(e.component.amount) + " ")])])])
            },
            ne = [],
            re = {
                name: "CraftingComponent",
                data: function() {
                    return {}
                },
                mixins: [A],
                props: {
                    component: {
                        type: Object,
                        required: !0
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["inventory", "food"])), {}, {
                    available: function() {
                        var e = {};
                        return e = this.component.type && "food" === this.component.type ? this.findItem(this.food, this.component.name) : this.findItem(this.inventory, this.component.name), e ? Math.floor(e.amount) : 0
                    },
                    availableClass: function() {
                        return this.available >= this.component.amount ? "has-text-success" : "has-text-danger"
                    }
                })
            },
            oe = re,
            ie = (t("5f32"), Object(i["a"])(oe, te, ne, !1, null, "0241a0ff", null)),
            se = ie.exports,
            me = {
                name: "Craftable",
                data: function() {
                    return {}
                },
                mixins: [A],
                components: {
                    CraftingComponent: se
                },
                props: {
                    item: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["inventory", "house", "houseAddOns", "newCraft"])), {}, {
                    unlocked: function() {
                        return this.requirementsMet(this.item, this.house, this.houseAddOns)
                    },
                    canCraft: function() {
                        return this.craftable(this.item) && this.unlocked
                    }
                }),
                methods: Object(h["a"])(Object(h["a"])({}, Object(g["d"])(["setField"])), Object(g["b"])(["craftGear"])),
                watch: {
                    unlocked: {
                        handler: function(e, a) {
                            !e || a || this.item.built || (this.setField({
                                name: "newCraft",
                                value: !0
                            }), this.notification("New crafting item unlocked: " + this.item.name))
                        },
                        deep: !0
                    }
                }
            },
            ue = me,
            ce = Object(i["a"])(ue, ee, ae, !1, null, null, null),
            le = ce.exports,
            de = {
                name: "Craftables",
                data: function() {
                    return {}
                },
                props: {
                    filter: {
                        required: !1,
                        type: String,
                        default: function() {
                            return ""
                        }
                    }
                },
                components: {
                    Craftable: le,
                    Panel: H
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["craftables"])), {}, {
                    items: function() {
                        var e = this;
                        return "" != this.filter ? R["filter"](this.craftables, (function(a) {
                            return a.name.toLowerCase().includes(e.filter.toLowerCase()) || R["filter"](a.components, (function(a) {
                                return a.name.toLowerCase().includes(e.filter.toLowerCase())
                            })).length > 0
                        })) : this.craftables
                    }
                })
            },
            he = de,
            pe = Object(i["a"])(he, Q, Z, !1, null, null, null),
            fe = pe.exports,
            be = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("section", [t("panel", {
                    attrs: {
                        heading: "Housing"
                    }
                }, [t("template", {
                    slot: "content"
                }, [t("div", [e._v(" " + e._s(e.house.name) + " ")]), t("div", [e._v("Beds: " + e._s(e.house.beds))]), t("div", [e._v("Comfort: " + e._s(e.comfort))]), t("div", [e._v("Fortification: " + e._s(e.fortification))]), e._l(e.houses, (function(e, a) {
                    return t("div", {
                        key: a
                    }, [t("house", {
                        attrs: {
                            item: e
                        }
                    })], 1)
                }))], 2)], 2)], 1)
            },
            ge = [],
            ve = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return e.unlocked && e.house.beds < e.item.beds ? t("div", {
                    staticClass: "item"
                }, [t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column"
                }, [t("div", {
                    staticClass: "is-size-5"
                }, [e._v(e._s(e.item.name))])]), t("div", {
                    staticClass: "column has-text-right"
                }, [e._v(" Beds: " + e._s(e.item.beds) + " "), t("b-button", {
                    attrs: {
                        size: "is-small",
                        disabled: !e.canCraft,
                        type: e.canCraft ? "is-success" : ""
                    },
                    on: {
                        click: function(a) {
                            return e.updateHouse(e.item)
                        }
                    }
                }, [e._v("Craft")])], 1)]), e._l(e.item.components, (function(e) {
                    return t("div", {
                        key: e.name
                    }, [t("crafting-component", {
                        attrs: {
                            component: e
                        }
                    })], 1)
                }))], 2) : e._e()
            },
            ye = [],
            ke = {
                name: "House",
                data: function() {
                    return {}
                },
                mixins: [A],
                components: {
                    CraftingComponent: se
                },
                props: {
                    item: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["inventory", "gear", "house", "houseAddOns"])), {}, {
                    unlocked: function() {
                        return this.requirementsMet(this.item, this.house, this.houseAddOns)
                    },
                    canCraft: function() {
                        return this.craftable(this.item) && this.unlocked && this.house.beds < this.item.beds
                    }
                }),
                methods: Object(h["a"])(Object(h["a"])({}, Object(g["d"])(["setField"])), Object(g["b"])(["updateHouse"])),
                watch: {
                    canCraft: {
                        handler: function(e, a) {
                            e && !a && (this.setField({
                                name: "newHouse",
                                value: !0
                            }), this.notification("New house unlocked: " + this.item.name))
                        },
                        deep: !0
                    }
                }
            },
            we = ke,
            Re = (t("e9be"), Object(i["a"])(we, ve, ye, !1, null, "d0d446b0", null)),
            xe = Re.exports,
            Se = {
                name: "Houses",
                data: function() {
                    return {}
                },
                components: {
                    House: xe,
                    Panel: H
                },
                computed: Object(h["a"])({}, Object(g["e"])(["houses", "house", "comfort", "fortification"]))
            },
            Ce = Se,
            Oe = Object(i["a"])(Ce, be, ge, !1, null, null, null),
            Te = Oe.exports,
            _e = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("section", [t("panel", {
                    attrs: {
                        heading: e.label
                    }
                }, [t("template", {
                    slot: "content"
                }, e._l(e.items, (function(e, a) {
                    return t("div", {
                        key: a,
                        staticClass: "item"
                    }, [t("house-add-on", {
                        attrs: {
                            item: e
                        }
                    })], 1)
                })), 0)], 2)], 1)
            },
            Ie = [],
            qe = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return e.unlocked || e.item.built ? t("div", [t("div", {
                    staticClass: "columns is-multiline"
                }, [t("div", {
                    staticClass: "column is-half house-top"
                }, [t("div", {
                    staticClass: "is-size-5"
                }, [t("b-tooltip", {
                    attrs: {
                        label: e.item.tooltip,
                        type: "is-primary is-light",
                        dashed: ""
                    }
                }, [e._v(e._s(e.item.name))])], 1)]), t("div", {
                    staticClass: "column is-half has-text-right"
                }, [e.item.built ? e.item.built && e.item.processing.length ? t("div", [t("b-field", [t("b-checkbox", {
                    attrs: {
                        "native-value": e.item.enabled
                    },
                    model: {
                        value: e.item.enabled,
                        callback: function(a) {
                            e.$set(e.item, "enabled", a)
                        },
                        expression: "item.enabled"
                    }
                }, [e._v(" Enabled ")])], 1)], 1) : e._e() : t("b-button", {
                    attrs: {
                        size: "is-small",
                        disabled: !e.canCraft,
                        type: e.canCraft ? "is-success" : ""
                    },
                    on: {
                        click: function(a) {
                            return e.craftAddOn(e.item)
                        }
                    }
                }, [e._v("Craft")])], 1), t("div", {
                    staticClass: "column house-input"
                }, [e.item.built ? e.item.built && e.item.enabled ? t("div", [e.item.comfort ? t("div", [e._v("Comfort: " + e._s(e.item.comfort))]) : e._e(), e.item.processing.length ? t("div", [t("a", {
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: function(a) {
                            a.preventDefault(), e.show = !e.show
                        }
                    }
                }, [e._v("show | hide")]), e.show ? t("div", e._l(e.item.processing, (function(a, n) {
                    return t("div", {
                        key: "process" + n
                    }, [e._l(a.input, (function(a, n) {
                        return t("span", {
                            key: "item" + n,
                            staticClass: "list-item"
                        }, [e._v(e._s(a.amount) + " " + e._s(a.name))])
                    })), e._v(" -> " + e._s(a.output.name) + " " + e._s(a.output.amount) + " ")], 2)
                })), 0) : e._e()]) : e._e()]) : e._e() : t("div", e._l(e.item.components, (function(e) {
                    return t("div", {
                        key: e.name
                    }, [t("crafting-component", {
                        attrs: {
                            component: e
                        }
                    })], 1)
                })), 0)])])]) : e._e()
            },
            je = [],
            He = {
                name: "HouseAddOn",
                data: function() {
                    return {
                        enabled: !1,
                        show: !0
                    }
                },
                mixins: [A],
                components: {
                    CraftingComponent: se
                },
                props: {
                    item: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["inventory", "food", "gear", "house", "houseAddOns"])), {}, {
                    unlocked: function() {
                        return this.requirementsMet(this.item, this.house, this.houseAddOns)
                    },
                    canCraft: function() {
                        return this.craftable(this.item) && this.unlocked
                    }
                }),
                methods: Object(h["a"])(Object(h["a"])({}, Object(g["d"])(["setField"])), Object(g["b"])(["craftAddOn"])),
                watch: {
                    unlocked: {
                        handler: function(e, a) {
                            !e || a || this.item.built || ("workbench" === this.item.type || "forge" === this.item.type || "processing" === this.item.type ? (this.setField({
                                name: "newAddOn",
                                value: !0
                            }), this.notification("New " + this.item.type + " item unlocked: " + this.item.name)) : (this.setField({
                                name: "newHouse",
                                value: !0
                            }), this.notification("New " + this.item.type + " item unlocked: " + this.item.name)))
                        },
                        deep: !0
                    }
                }
            },
            Be = He,
            Le = (t("1779"), Object(i["a"])(Be, qe, je, !1, null, "6084b753", null)),
            Ae = Le.exports,
            We = {
                name: "AddOns",
                data: function() {
                    return {}
                },
                props: {
                    type: {
                        required: !0
                    },
                    label: {
                        required: !0
                    },
                    filter: {
                        required: !1,
                        type: String,
                        default: function() {
                            return ""
                        }
                    }
                },
                components: {
                    HouseAddOn: Ae,
                    Panel: H
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["houseAddOns", "house"])), {}, {
                    items: function() {
                        var e = this;
                        return R["filter"](this.houseAddOns, (function(a) {
                            var t = a.type === e.type,
                                n = !0;
                            return "" != e.filter && (n = a.name.toLowerCase().includes(e.filter.toLowerCase()) || R["filter"](a.components, (function(a) {
                                return a.name.toLowerCase().includes(e.filter.toLowerCase())
                            })).length > 0), n && t
                        }))
                    }
                })
            },
            De = We,
            Fe = Object(i["a"])(De, _e, Ie, !1, null, null, null),
            Me = Fe.exports,
            Pe = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("section", [t("panel", {
                    attrs: {
                        heading: "Fortifications"
                    }
                }, [t("template", {
                    slot: "content"
                }, e._l(e.items, (function(e, a) {
                    return t("div", {
                        key: a
                    }, [t("fortification", {
                        staticClass: "item",
                        attrs: {
                            item: e
                        }
                    })], 1)
                })), 0)], 2)], 1)
            },
            Ge = [],
            Ve = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return e.unlocked || e.item.built ? t("div", [t("div", {
                    staticClass: "columns is-multiline"
                }, [t("div", {
                    staticClass: "column is-half house-top"
                }, [t("div", {
                    staticClass: "is-size-5"
                }, [e._v(e._s(e.item.name))])]), t("div", {
                    staticClass: "column is-half has-text-right"
                }, [e.item.built ? e._e() : t("b-button", {
                    attrs: {
                        size: "is-small",
                        disabled: !e.canCraft,
                        type: e.canCraft ? "is-success" : ""
                    },
                    on: {
                        click: function(a) {
                            return e.craftFortification(e.item)
                        }
                    }
                }, [e._v("Craft")])], 1), t("div", {
                    staticClass: "column house-input"
                }, [e.item.built ? e.item.built && e.item.enabled ? t("div", [e.item.fortification ? t("div", [e._v(" Fortification: " + e._s(e.item.fortification) + " ")]) : e._e()]) : e._e() : t("div", e._l(e.item.components, (function(e) {
                    return t("div", {
                        key: e.name
                    }, [t("crafting-component", {
                        attrs: {
                            component: e
                        }
                    })], 1)
                })), 0)])])]) : e._e()
            },
            Ee = [],
            ze = {
                name: "Fortification",
                data: function() {
                    return {
                        enabled: !1
                    }
                },
                mixins: [A],
                components: {
                    CraftingComponent: se
                },
                props: {
                    item: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["inventory", "house", "houseAddOns"])), {}, {
                    unlocked: function() {
                        return this.requirementsMet(this.item, this.house, this.houseAddOns)
                    },
                    canCraft: function() {
                        return this.craftable(this.item) && this.unlocked
                    }
                }),
                methods: Object(h["a"])(Object(h["a"])({}, Object(g["d"])(["setField"])), Object(g["b"])(["craftFortification"])),
                watch: {
                    unlocked: {
                        handler: function(e, a) {
                            !e || a || this.item.built || (this.setField({
                                name: "newHouse",
                                value: !0
                            }), this.notification("New fortification unlocked: " + this.item.name))
                        },
                        deep: !0
                    }
                }
            },
            Ne = ze,
            $e = (t("55ee"), Object(i["a"])(Ne, Ve, Ee, !1, null, "50a9942a", null)),
            Ke = $e.exports,
            Ye = {
                name: "Fortifications",
                data: function() {
                    return {}
                },
                props: {
                    filter: {
                        required: !1,
                        type: String,
                        default: function() {
                            return ""
                        }
                    }
                },
                components: {
                    Fortification: Ke,
                    Panel: H
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["fortifications", "house"])), {}, {
                    items: function() {
                        var e = this;
                        return "" != this.filter ? R["filter"](this.fortifications, (function(a) {
                            return a.name.toLowerCase().includes(e.filter.toLowerCase()) || R["filter"](a.components, (function(a) {
                                return a.name.toLowerCase().includes(e.filter.toLowerCase())
                            })).length > 0
                        })) : this.fortifications
                    }
                })
            },
            Je = Ye,
            Xe = Object(i["a"])(Je, Pe, Ge, !1, null, null, null),
            Ue = Xe.exports,
            Qe = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("panel", {
                    attrs: {
                        heading: "Gear"
                    }
                }, [t("template", {
                    slot: "content"
                }, e._l(e.items, (function(a, n) {
                    return t("div", {
                        key: n,
                        staticClass: "item"
                    }, [t("div", {
                        staticClass: "columns"
                    }, [t("div", {
                        staticClass: "column"
                    }, [e._v(e._s(a.name))]), t("div", {
                        staticClass: "column"
                    }, [e.vikings.length ? t("b-field", {
                        staticClass: "has-addons"
                    }, [t("div", {
                        staticClass: "control"
                    }, [t("b-select", {
                        attrs: {
                            size: "is-small",
                            placeholder: "Select a viking"
                        },
                        model: {
                            value: e.vikingIndex,
                            callback: function(a) {
                                e.vikingIndex = a
                            },
                            expression: "vikingIndex"
                        }
                    }, e._l(e.vikings, (function(a, n) {
                        return t("option", {
                            key: n,
                            domProps: {
                                value: n
                            }
                        }, [e._v(" " + e._s(a.name) + " ")])
                    })), 0)], 1), t("div", {
                        staticClass: "control"
                    }, [t("a", {
                        staticClass: "button is-small is-primary",
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.assignGear({
                                    item: a,
                                    vikingIndex: e.vikingIndex
                                })
                            }
                        }
                    }, [e._v("Assign")])])]) : e._e()], 1)])])
                })), 0)], 2)
            },
            Ze = [],
            ea = {
                name: "Gear",
                data: function() {
                    return {
                        vikingIndex: 0
                    }
                },
                props: {
                    filter: {
                        required: !1,
                        type: String,
                        default: function() {
                            return ""
                        }
                    }
                },
                components: {
                    Panel: H
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["gear", "vikings"])), {}, {
                    items: function() {
                        var e = this;
                        return "" != this.filter ? R["filter"](this.gear, (function(a) {
                            return a.name.toLowerCase().includes(e.filter.toLowerCase()) || R["filter"](a.components, (function(a) {
                                return a.name.toLowerCase().includes(e.filter.toLowerCase())
                            })).length > 0
                        })) : this.gear
                    }
                }),
                methods: Object(h["a"])({}, Object(g["d"])(["assignGear"]))
            },
            aa = ea,
            ta = Object(i["a"])(aa, Qe, Ze, !1, null, null, null),
            na = ta.exports,
            ra = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", [e.combat ? t("div", {
                    staticClass: "box"
                }, [t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column"
                }, e._l(e.vikings, (function(e, a) {
                    return t("div", {
                        key: a,
                        staticClass: "item"
                    }, [t("viking-combat", {
                        attrs: {
                            item: e,
                            index: a
                        }
                    })], 1)
                })), 0), t("div", {
                    staticClass: "divider is-vertical"
                }, [e._v("VS")]), t("div", {
                    staticClass: "column"
                }, e._l(e.enemies, (function(e, a) {
                    return t("div", {
                        key: a,
                        staticClass: "item"
                    }, [t("enemy", {
                        attrs: {
                            item: e,
                            index: a
                        }
                    })], 1)
                })), 0)])]) : e._e()])
            },
            oa = [],
            ia = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column"
                }, [t("div", [e._v(e._s(e.item.name))]), t("div", [t("b-progress", {
                    attrs: {
                        type: e.healthColor,
                        max: e.item.maxHealth,
                        value: e.item.health,
                        "show-value": ""
                    }
                }, [e._v(e._s(e.item.health) + " / " + e._s(e.item.maxHealth))])], 1), t("div", [e._v("Health Regen: " + e._s(e.item.healthRegen))]), t("div", [t("b-progress", {
                    attrs: {
                        max: e.item.maxStamina,
                        value: e.item.stamina,
                        "show-value": "",
                        type: "is-warning"
                    }
                }, [e._v(e._s(e.item.stamina) + " / " + e._s(e.item.maxStamina))])], 1), t("div", [e._v("Stamina Regen: " + e._s(e.item.staminaRegen))]), t("div", [e._v("Armor: " + e._s(e.armor.armorTotal))])]), t("div", {
                    staticClass: "column"
                }, [t("div", [e._v(e._s(e.weapon.name))]), t("div", [e._v(" " + e._s(e.weapon.combat.damage) + " dmg / " + e._s(e.weapon.combat.stamina) + " stm / " + e._s(e.weapon.combat.accuracy) + " acc ")])])])
            },
            sa = [],
            ma = {
                name: "Viking",
                data: function() {
                    return {}
                },
                mixins: [A],
                props: {
                    item: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    },
                    index: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return 0
                        }
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["tasks"])), {}, {
                    healthColor: function() {
                        return this.item.health > this.item.maxHealth / 2 ? "is-success" : this.item.health > this.item.maxHealth / 4 ? "is-warning" : "is-danger"
                    },
                    armor: function() {
                        return this.getArmor(this.item.gear)
                    },
                    weapon: function() {
                        return this.getWeapon(this.item.gear)
                    }
                })
            },
            ua = ma,
            ca = Object(i["a"])(ua, ia, sa, !1, null, null, null),
            la = ca.exports,
            da = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column"
                }, [t("div", [e._v(e._s(e.item.name))]), t("div", [t("b-progress", {
                    attrs: {
                        max: e.item.maxHealth,
                        value: e.item.health,
                        "show-value": ""
                    }
                }, [e._v(e._s(e.item.health) + " / " + e._s(e.item.maxHealth))])], 1), t("div", [e._v("Health Regen: " + e._s(e.item.healthRegen))]), t("div", [t("b-progress", {
                    attrs: {
                        max: e.item.maxStamina,
                        value: e.item.stamina,
                        "show-value": ""
                    }
                }, [e._v(e._s(e.item.stamina) + " / " + e._s(e.item.maxStamina))])], 1), t("div", [e._v("Stamina Regen: " + e._s(e.item.staminaRegen))])]), t("div", {
                    staticClass: "column"
                }, e._l(e.item.attacks, (function(a, n) {
                    return t("div", {
                        key: n
                    }, [t("div", [e._v(e._s(a.name))]), t("div", [e._v(" " + e._s(a.damage) + " dmg / " + e._s(a.stamina) + " stm / " + e._s(a.accuracy) + " acc ")])])
                })), 0)])
            },
            ha = [],
            pa = {
                name: "Viking",
                data: function() {
                    return {}
                },
                props: {
                    item: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    },
                    index: {
                        type: Number,
                        required: !0,
                        default: function() {
                            return 0
                        }
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["tasks"])), {}, {
                    preference: {
                        get: function() {
                            return this.item.foodPreference
                        },
                        set: function(e) {
                            this.item.foodPreference = e
                        }
                    },
                    usableTasks: function() {
                        var e = this,
                            a = R["filter"](this.tasks, (function(a) {
                                if (!a.requirements || !a.requirements.length) return !0;
                                var t = R["filter"](a.requirements, (function(a) {
                                    return R["filter"](e.item.gear, (function(e) {
                                        return e.name === a
                                    })).length
                                })).length;
                                return t > 0
                            }));
                        return a
                    }
                })
            },
            fa = pa,
            ba = Object(i["a"])(fa, da, ha, !1, null, null, null),
            ga = ba.exports,
            va = {
                name: "Combat",
                data: function() {
                    return {}
                },
                components: {
                    VikingCombat: la,
                    Enemy: ga
                },
                computed: Object(h["a"])({}, Object(g["e"])(["combat", "vikings", "enemies"]))
            },
            ya = va,
            ka = Object(i["a"])(ya, ra, oa, !1, null, "4bf633d8", null),
            wa = ka.exports,
            Ra = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", [e.bossCombat ? t("div", [t("combat")], 1) : e.delve ? t("div", [t("delve")], 1) : e.bossCombat || e.combat ? t("div", [e._v("Cannot delve or challenge a boss while in combat.")]) : t("div", {
                    staticClass: "box"
                }, e._l(e.unlockedBiomes, (function(a, n) {
                    return t("div", {
                        key: "biome" + n,
                        staticClass: "item"
                    }, [t("h3", {
                        staticClass: "subtitle"
                    }, [e._v(" " + e._s(a.name)), a.delve ? t("b-button", {
                        staticClass: "is-small is-pulled-right",
                        attrs: {
                            disabled: e.worldTier != a.worldTier || 0 === e.vikings.length,
                            type: e.worldTier === a.worldTier && e.vikings.length > 0 ? "is-success" : ""
                        },
                        on: {
                            click: function(a) {
                                return e.initializeDelve()
                            }
                        }
                    }, [e._v("Delve")]) : e._e()], 1), t("pre", [e._v(e._s(a.flavor))]), t("boss", {
                        staticClass: "pt-4",
                        attrs: {
                            item: e.bossList[a.worldTier]
                        }
                    })], 1)
                })), 0)])
            },
            xa = [],
            Sa = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return e.canCraft ? t("div", {
                    staticClass: "columns"
                }, [t("div", {
                    staticClass: "column"
                }, [t("div", [e._v(e._s(e.item.name))])]), t("div", {
                    staticClass: "column"
                }, e._l(e.item.components, (function(e) {
                    return t("div", {
                        key: e.name
                    }, [t("crafting-component", {
                        attrs: {
                            component: e
                        }
                    })], 1)
                })), 0), t("div", {
                    staticClass: "column has-text-right"
                }, [t("b-button", {
                    attrs: {
                        size: "is-small",
                        disabled: !e.canCraft || e.worldTier != e.item.worldTier,
                        type: e.canCraft && e.worldTier === e.item.worldTier ? "is-success" : ""
                    },
                    on: {
                        click: function(a) {
                            return e.challengeBoss(e.item)
                        }
                    }
                }, [e._v("Challenge")])], 1)]) : e._e()
            },
            Ca = [],
            Oa = {
                name: "Boss",
                data: function() {
                    return {}
                },
                mixins: [A],
                components: {
                    CraftingComponent: se
                },
                props: {
                    item: {
                        type: Object,
                        required: !0,
                        default: function() {
                            return {}
                        }
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["bossCombat", "inventory", "worldTier"])), {}, {
                    canCraft: function() {
                        return this.craftable(this.item)
                    }
                }),
                methods: Object(h["a"])({}, Object(g["b"])(["challengeBoss"]))
            },
            Ta = Oa,
            _a = Object(i["a"])(Ta, Sa, Ca, !1, null, null, null),
            Ia = _a.exports,
            qa = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", [e.combat ? t("combat") : e._e(), t("div", {
                    staticClass: "box"
                }, [t("delve-map", {
                    attrs: {
                        config: e.biome.delve
                    }
                }), t("b-message", {
                    attrs: {
                        type: "is-info"
                    }
                }, [e._v(" Use the arrow keys to move around. Press space to exit when you are on the starting tile. Click on the map if your arrow keys aren't working. ")])], 1)], 1)
            },
            ja = [],
            Ha = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("div", {
                    staticClass: "pt-4"
                }, ["" != e.mapHtml ? t("div", {
                    ref: "map",
                    staticClass: "has-text-centered",
                    attrs: {
                        tabindex: "0"
                    },
                    on: {
                        keydown: [function(a) {
                            return !a.type.indexOf("key") && e._k(a.keyCode, "up", 38, a.key, ["Up", "ArrowUp"]) ? null : (a.preventDefault(), e.up(a))
                        }, function(a) {
                            return !a.type.indexOf("key") && e._k(a.keyCode, "down", 40, a.key, ["Down", "ArrowDown"]) ? null : (a.preventDefault(), e.down(a))
                        }, function(a) {
                            return !a.type.indexOf("key") && e._k(a.keyCode, "left", 37, a.key, ["Left", "ArrowLeft"]) || "button" in a && 0 !== a.button ? null : (a.preventDefault(), e.left(a))
                        }, function(a) {
                            return !a.type.indexOf("key") && e._k(a.keyCode, "right", 39, a.key, ["Right", "ArrowRight"]) || "button" in a && 2 !== a.button ? null : (a.preventDefault(), e.right(a))
                        }, function(a) {
                            return !a.type.indexOf("key") && e._k(a.keyCode, "space", 32, a.key, [" ", "Spacebar"]) ? null : (a.preventDefault(), e.space(a))
                        }]
                    }
                }, [t("div", [t("div", {
                    staticClass: "map",
                    domProps: {
                        innerHTML: e._s(e.mapHtml)
                    }
                })]), e.atStart ? t("b-button", {
                    on: {
                        click: function(a) {
                            return e.setField({
                                name: "delve",
                                value: !1
                            })
                        }
                    }
                }, [e._v("Leave")]) : e._e()], 1) : e._e()])
            },
            Ba = [],
            La = (t("d81d"), t("a434"), {
                name: "DelveMap",
                data: function() {
                    return {
                        xStart: 0,
                        yStart: 0,
                        map: {
                            spawns: [],
                            totems: [],
                            treasure: [],
                            data: null
                        },
                        mapData: null,
                        mapHtml: "",
                        chanceToBuild: .5,
                        chanceForSpawn: .025,
                        chanceForTotem: .025,
                        chanceForTotemDrop: .25,
                        chanceForTreasure: .025,
                        spaces: ["X", "s", " ", "t", "e"],
                        playerCoords: null,
                        previousSpace: null,
                        fog: 6,
                        sizeDivisor: 3,
                        start: "<span class='marker has-background-danger' style='color:white;'>S</span>",
                        player: "<span class='marker has-background-primary' style='color:white'>@</span>",
                        placeholder: "<span class='marker' style='background-color:grey;color:white;'>!</span>",
                        enemy: "",
                        totem: "<span class='marker' style='background-color:Fuchsia;color:white;'>T</span>",
                        treasure: "<span class='marker has-background-warning' style='color:black;'>#</span>"
                    }
                },
                props: {
                    config: {
                        required: !0
                    }
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["worldTier", "vikings", "combat"])), {}, {
                    atStart: function() {
                        return this.playerCoords.x === this.xStart && this.playerCoords.y === this.yStart
                    }
                }),
                methods: Object(h["a"])(Object(h["a"])(Object(h["a"])({}, Object(g["d"])(["setField"])), Object(g["b"])(["updateMapData", "setupCombat", "addTotem", "addTreasure"])), {}, {
                    up: function() {
                        this.playerCoords.y > 0 && "X" !== this.map.data[this.playerCoords.y - 1][this.playerCoords.x] && this.movePlayer({
                            x: this.playerCoords.x,
                            y: this.playerCoords.y - 1
                        })
                    },
                    down: function() {
                        this.playerCoords.y < this.config.yHeight && "X" !== this.map.data[this.playerCoords.y + 1][this.playerCoords.x] && this.movePlayer({
                            x: this.playerCoords.x,
                            y: this.playerCoords.y + 1
                        })
                    },
                    left: function() {
                        this.playerCoords.x > 0 && "X" !== this.map.data[this.playerCoords.y][this.playerCoords.x - 1] && this.movePlayer({
                            x: this.playerCoords.x - 1,
                            y: this.playerCoords.y
                        })
                    },
                    right: function() {
                        this.playerCoords.x < this.config.xLength - 1 && "X" !== this.map.data[this.playerCoords.y][this.playerCoords.x + 1] && this.movePlayer({
                            x: this.playerCoords.x + 1,
                            y: this.playerCoords.y
                        })
                    },
                    space: function() {
                        this.atStart && this.setField({
                            name: "delve",
                            value: !1
                        })
                    },
                    movePlayer: function(e) {
                        var a = this;
                        if (!this.combat) {
                            this.map.data[this.playerCoords.y][this.playerCoords.x] = this.playerCoords.previousValue, this.playerCoords.y = e.y, this.playerCoords.x = e.x;
                            var t = null;
                            R["findIndex"](this.map.spawns, (function(e) {
                                return e.x === a.playerCoords.x && e.y === a.playerCoords.y
                            })) >= 0 ? (t = R["findIndex"](this.map.spawns, (function(e) {
                                return e.x === a.playerCoords.x && e.y === a.playerCoords.y
                            })), this.map.spawns.splice(t, 1), this.playerCoords.previousValue = ".", this.setupCombat("Monsters jump out of the darkness!\n")) : R["findIndex"](this.map.totems, (function(e) {
                                return e.x === a.playerCoords.x && e.y === a.playerCoords.y
                            })) >= 0 ? (t = R["findIndex"](this.map.totems, (function(e) {
                                return e.x === a.playerCoords.x && e.y === a.playerCoords.y
                            })), this.map.totems.splice(t, 1), this.playerCoords.previousValue = ".", this.addTotem(this.config)) : R["findIndex"](this.map.treasure, (function(e) {
                                return e.x === a.playerCoords.x && e.y === a.playerCoords.y
                            })) >= 0 ? (t = R["findIndex"](this.map.treasure, (function(e) {
                                return e.x === a.playerCoords.x && e.y === a.playerCoords.y
                            })), this.map.treasure.splice(t, 1), this.playerCoords.previousValue = ".", this.addTreasure(this.config)) : this.playerCoords.previousValue = this.map.data[this.playerCoords.y][this.playerCoords.x], this.map.data[this.playerCoords.y][this.playerCoords.x] = "<span class='marker' style='background-color:green;color:white'>@</span>", this.drawMap()
                        }
                    },
                    shiftArray: function(e) {
                        var a = e[0],
                            t = e.splice(1, e.length);
                        return t.push(a), t
                    },
                    initMap: function() {
                        var e = this;
                        return Array.apply(null, Array(this.config.yHeight)).map((function() {
                            return Array.apply(null, Array(e.config.xLength)).map((function() {
                                return "X"
                            }))
                        }))
                    },
                    buildSpace: function(e, a, t, n, r, o, i, s) {
                        return "X" === s[a][e] && Math.random() < this.chanceToBuild ? (Math.random() < this.chanceForSpawn && this.map.spawns.length < this.config.spawns ? (s[a][e] = this.placeholder, this.map.spawns.push({
                            x: e,
                            y: a
                        })) : Math.random() < this.chanceForTotem && this.map.totems.length < this.config.totems ? (s[a][e] = this.placeholder, this.map.totems.push({
                            x: e,
                            y: a
                        })) : Math.random() < this.chanceForTreasure && this.map.treasure.length < this.config.treasure ? (s[a][e] = this.placeholder, this.map.treasure.push({
                            x: e,
                            y: a
                        })) : s[a][e] = ".", {
                            xCurr: e,
                            yCurr: a,
                            usedSpaces: r + 1,
                            currDirection: o,
                            built: !0,
                            array: s
                        }) : {
                            xCurr: t,
                            yCurr: n,
                            usedSpaces: r,
                            currDirection: i,
                            built: !1,
                            array: s
                        }
                    },
                    makeMap: function() {
                        var e = this,
                            a = this.initMap();
                        this.xStart = this.randomIntFromInterval(1, this.config.xLength - 1), this.yStart = this.randomIntFromInterval(1, this.config.yHeight - 1), this.playerCoords = {
                            x: this.xStart,
                            y: this.yStart,
                            previousValue: this.start
                        }, a[this.yStart][this.xStart] = this.player;
                        var t, n, r = this.xStart,
                            o = this.yStart,
                            i = 0,
                            s = ["left", "up", "right", "down"],
                            m = "left";
                        while (i <= this.config.xLength * this.config.yHeight / this.sizeDivisor) {
                            var u = !1;
                            if (R["forEach"](s, (function(s) {
                                    if (!u) switch (s) {
                                        case "left":
                                            if (0 != r) {
                                                t = r - 1, n = o;
                                                var c = e.buildSpace(t, n, r, o, i, "left", m, a);
                                                r = c.xCurr, o = c.yCurr, i = c.usedSpaces, m = c.currDirection, u = c.built, a = c.array
                                            }
                                            break;
                                        case "up":
                                            if (0 != o) {
                                                t = r, n = o - 1;
                                                var l = e.buildSpace(t, n, r, o, i, "up", m, a);
                                                r = l.xCurr, o = l.yCurr, i = l.usedSpaces, m = l.currDirection, u = l.built, a = l.array
                                            }
                                            break;
                                        case "right":
                                            if (r != e.config.xLength - 1) {
                                                t = r + 1, n = o;
                                                var d = e.buildSpace(t, n, r, o, i, "right", m, a);
                                                r = d.xCurr, o = d.yCurr, i = d.usedSpaces, m = d.currDirection, u = d.built, a = d.array
                                            }
                                            break;
                                        case "down":
                                            if (o != e.config.yHeight - 1) {
                                                t = r, n = o + 1;
                                                var h = e.buildSpace(t, n, r, o, i, "down", m, a);
                                                r = h.xCurr, o = h.yCurr, i = h.usedSpaces, m = h.currDirection, u = h.built, a = h.array
                                            }
                                            break
                                    }
                                })), u)
                                while (m !== s[0]) s = this.shiftArray(s);
                            else {
                                var c = !1;
                                if (R["forEach"](s, (function(t) {
                                        if (!c) switch (t) {
                                            case "left":
                                                0 != r && "X" !== a[o][r - 1] && (r -= 1, c = !0, m = "left");
                                                break;
                                            case "up":
                                                0 != o && "X" !== a[o - 1][r] && (o -= 1, c = !0, m = "up");
                                                break;
                                            case "right":
                                                r != e.config.xLength - 1 && "X" !== a[o][r + 1] && (r += 1, c = !0, m = "right");
                                                break;
                                            case "down":
                                                o != e.config.yHeight - 1 && "X" !== a[o + 1][r] && (o += 1, c = !0, m = "down");
                                                break
                                        }
                                    })), c)
                                    while (m !== s[0]) s = this.shiftArray(s);
                                else s = this.shiftArray(s)
                            }
                        }
                        this.map.data = a, this.drawMap()
                    },
                    drawMap: function() {
                        var e = this,
                            a = "";
                        R["forEach"](this.map.data, (function(t, n) {
                            R["forEach"](t, (function(t, r) {
                                var o = e.playerCoords.x,
                                    i = e.playerCoords.y,
                                    s = Math.sqrt(Math.pow(r - o, 2) + Math.pow(n - i, 2));
                                a += s <= e.fog ? t : "<span style='background-color:#999;color:grey;'>?</span>"
                            })), a += "<br/>"
                        })), this.mapHtml = a, this.$nextTick((function() {
                            e.$refs.map.focus()
                        }))
                    },
                    randomIntFromInterval: function(e, a) {
                        return Math.floor(Math.random() * (a - e + 1) + e)
                    }
                }),
                created: function() {
                    this.config.mapData ? (this.map.data = this.config.mapData, this.drawMap()) : this.makeMap()
                }
            }),
            Aa = La,
            Wa = (t("271e"), Object(i["a"])(Aa, Ha, Ba, !1, null, "d502d9ba", null)),
            Da = Wa.exports,
            Fa = {
                name: "Delve",
                data: function() {
                    return {}
                },
                components: {
                    Combat: wa,
                    DelveMap: Da
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["combat", "vikings", "enemies", "delve", "worldTier", "biomes"])), {}, {
                    biome: function() {
                        return this.biomes[this.worldTier]
                    }
                })
            },
            Ma = Fa,
            Pa = Object(i["a"])(Ma, qa, ja, !1, null, "cb43ff22", null),
            Ga = Pa.exports,
            Va = {
                name: "ProvingGrounds",
                data: function() {
                    return {}
                },
                components: {
                    Boss: Ia,
                    Combat: wa,
                    Delve: Ga
                },
                computed: Object(h["a"])(Object(h["a"])(Object(h["a"])({}, Object(g["c"])(["currentBiome"])), Object(g["e"])(["bossCombat", "combat", "vikings", "enemies", "bossList", "biomes", "delve", "worldTier"])), {}, {
                    unlockedBiomes: function() {
                        return R["reverse"](R["filter"](this.biomes, (function(e) {
                            return e.unlocked
                        })))
                    }
                }),
                methods: Object(h["a"])({}, Object(g["b"])(["initializeDelve"]))
            },
            Ea = Va,
            za = (t("1607"), Object(i["a"])(Ea, Ra, xa, !1, null, "5e4425b3", null)),
            Na = za.exports,
            $a = {
                name: "Game",
                data: function() {
                    return {
                        newState: null,
                        search: ""
                    }
                },
                mixins: [A],
                components: {
                    Vikings: M,
                    VikingDeath: N,
                    Inventory: U,
                    Craftables: fe,
                    Gear: na,
                    Houses: Te,
                    HouseAddOns: Me,
                    Combat: wa,
                    Fortifications: Ue,
                    ProvingGrounds: Na
                },
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["activeTab", "combat", "vikings", "tasks", "inventory", "maxVikings", "craftables", "day", "house", "flags", "encounterChance", "comfort", "fortification", "worldTier", "biomes", "newCraft", "newAddOn", "newHouse", "isPaused", "battleLog", "isDead", "deathHeader", "deathMessage", "ripVikings", "memorial", "gear", "win"])), {}, {
                    state: {
                        get: function() {
                            return this.$store.state
                        },
                        set: function(e) {
                            this.init(e)
                        }
                    },
                    dead: {
                        get: function() {
                            return this.isDead
                        },
                        set: function(e) {
                            this.setField({
                                name: "isDead",
                                value: e
                            }), this.setField({
                                name: "isPaused",
                                value: e
                            })
                        }
                    },
                    ichor: function() {
                        var e = this.findItem(this.inventory, "Ichor");
                        return e ? e.amount : 0
                    },
                    itemRate: {
                        get: function() {
                            return this.$store.state.itemRateModifier
                        },
                        set: function(e) {
                            this.setField({
                                name: "itemRateModifier",
                                value: e
                            })
                        }
                    },
                    tab: {
                        get: function() {
                            return this.activeTab
                        },
                        set: function(e) {
                            "" != e && this.setField({
                                name: "activeTab",
                                value: e
                            })
                        }
                    }
                }),
                methods: Object(h["a"])(Object(h["a"])(Object(h["a"])({}, Object(g["b"])(["tick", "saveToDb", "reset", "clearDead", "convertGear"])), Object(g["d"])(["setField", "setField", "init"])), {}, {
                    clearNewItem: function(e) {
                        switch (console.log(e), e) {
                            case "crafting":
                                this.setField({
                                    name: "newCraft",
                                    value: !1
                                });
                                break;
                            case "building":
                                this.setField({
                                    name: "newHouse",
                                    value: !1
                                });
                                break;
                            case "workshop":
                                this.setField({
                                    name: "newAddOn",
                                    value: !1
                                });
                                break;
                            default:
                                break
                        }
                    },
                    resetTier: function() {
                        this.setField({
                            name: "worldTier",
                            value: 0
                        })
                    },
                    closeModal: function() {
                        this.setField({
                            name: "isDead",
                            value: !1
                        }), this.setField({
                            name: "isPaused",
                            value: !1
                        })
                    },
                    copy: function(e) {
                        var a = this;
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, navigator.clipboard.writeText(JSON.stringify(e));
                                    case 2:
                                        a.$buefy.toast.open({
                                            message: "Copied to clipboard!",
                                            type: "is-success"
                                        });
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    updateState: function() {
                        this.state = JSON.parse(this.newState)
                    }
                }),
                watch: {
                    battleLog: function() {
                        var e = this;
                        this.$nextTick((function() {
                            e.$refs.log.scrollTop = e.$refs.log.scrollHeight
                        }))
                    }
                },
                created: function() {
                    var e = this;
                    return Object(b["a"])(regeneratorRuntime.mark((function a() {
                        return regeneratorRuntime.wrap((function(a) {
                            while (1) switch (a.prev = a.next) {
                                case 0:
                                    setInterval((function() {
                                        e.isPaused || (e.tick(), e.saveToDb())
                                    }), 1e3);
                                case 1:
                                case "end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }
            },
            Ka = $a,
            Ya = (t("5265"), Object(i["a"])(Ka, p, f, !1, null, "221e0038", null)),
            Ja = Ya.exports,
            Xa = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("section", {
                    staticClass: "hero"
                }, [t("div", {
                    staticClass: "hero-body"
                }, [t("p", {
                    staticClass: "title"
                }, [e._v("Vikingcrement")]), t("p", {
                    staticClass: "subtitle"
                }, [e._v("An incremental text adventure")]), 0 === e.step ? t("div", [t("b-button", {
                    attrs: {
                        type: "is-success"
                    },
                    on: {
                        click: function(a) {
                            e.step = 1
                        }
                    }
                }, [e._v("New Game")])], 1) : e._e(), 1 === e.step ? t("div", [t("label", {
                    staticClass: "bold"
                }, [e._v("Enter a name")]), t("b-field", {
                    staticClass: "has-addons"
                }, [t("div", {
                    staticClass: "control"
                }, [t("b-input", {
                    attrs: {
                        placeholder: "State your name"
                    },
                    model: {
                        value: e.name,
                        callback: function(a) {
                            e.name = a
                        },
                        expression: "name"
                    }
                })], 1), t("div", {
                    staticClass: "control"
                }, [t("a", {
                    staticClass: "button is-primary",
                    on: {
                        click: function(a) {
                            a.preventDefault(), e.step = 2
                        }
                    }
                }, [e._v("Start")])])])], 1) : e._e(), 2 === e.step ? t("div", [t("div", {
                    staticClass: "log",
                    domProps: {
                        innerHTML: e._s(e.message)
                    }
                }), t("b-button", {
                    attrs: {
                        type: "is-success"
                    },
                    on: {
                        click: function(a) {
                            return e.newGame({
                                name: e.name
                            })
                        }
                    }
                }, [e._v("Start")])], 1) : e._e()])])
            },
            Ua = [],
            Qa = {
                name: "Start",
                data: function() {
                    return {
                        step: 0,
                        name: ""
                    }
                },
                mixins: [A],
                components: {},
                computed: Object(h["a"])(Object(h["a"])({}, Object(g["e"])(["flags"])), {}, {
                    message: function() {
                        var e = "You awaken in the clutches of an enormous black bird, its feathers shimmering in the bright sun. The wind batters your face as you come to the realization that you are being carried in the air. Regaining your senses, you have no recollection of how you came to be in this situation. From the vantage of this flight you can see green rolling meadows surrounded by a thick, impenetrable fog. The bird descends towards a mysterious stone arrangement, too well formed to be anything natural, but unlike any design you can recall.<br /><br />";
                        return e += "As you land, the bird disappears into a cloud of mist and reappears, smaller, perched on a rock pedestal in front of you.<br /><br />", e += '<span class="has-background-danger has-text-light">"Hail, ' + this.name + '! Welcome to my lands"</span>, the bird squawks.<br /><br />', e += '<span class="has-background-success has-text-light">"Where am I? Why am I here? And how do you know my name?"</span>, you ask.<br /><br />', e += '<span class="has-background-danger has-text-light">"Where is here? Here is where. In truth, I do not know the name of this realm. Your name, however, enters my mind as if I have always known."</span><br /><br />', e += '<span class="has-background-success has-text-light">"And my reason for being here?"</span><br /><br />', e += '<span class="has-background-danger has-text-light">"That I cannot say."</span><br /><br />', e += '<span class="has-background-success has-text-light">"But didn\'t you just say these were your lands?"</span><br /><br />', e += '<span class="has-background-danger has-text-light">"Hmm. Nobody has told me these are not my lands. I have been ferrying mortals such as you to these lands for as long as I can remember, but I can no longer remember why."</span><br /><br />', e += '<span class="has-background-success has-text-light">"So I have been carried here by you, against my will, robbed of my memory, for reasons you cannot explain?"</span><br /><br />', e += '<span class="has-background-danger has-text-light">"So it seems. I can tell you what little I know. These meadows are a relatively peaceful and bountiful land. Make use of the resources you find here. Build yourself a place to rest your head and your work may be rewarded."</span><br /><br />', e += '<span class="has-background-success has-text-light">"And what of the fog surrounding these lands?"</span><br /><br />', e += '<span class="has-background-danger has-text-light">"The fog... the fog... Oh yes, the fog! Beyond the fog are more dangerous lands. One might want to steer clear of those lands, but then again, one might not."</span><br /><br />', e += "The bird disappears once more into a cloud of mist, and seems to be gone for good.", e
                    }
                }),
                methods: Object(h["a"])({}, Object(g["b"])(["newGame"])),
                created: function() {
                    this.name = this.randomName()
                }
            },
            Za = Qa,
            et = Object(i["a"])(Za, Xa, Ua, !1, null, "2e4d8889", null),
            at = et.exports,
            tt = {
                name: "Home",
                data: function() {
                    return {}
                },
                components: {
                    Game: Ja,
                    Start: at
                },
                computed: Object(h["a"])({}, Object(g["e"])(["flags"])),
                methods: Object(h["a"])({}, Object(g["b"])(["initialize"])),
                created: function() {
                    this.initialize()
                }
            },
            nt = tt,
            rt = Object(i["a"])(nt, l, d, !1, null, null, null),
            ot = rt.exports;
        n["a"].use(c["a"]);
        var it = [{
                path: "/",
                name: "Home",
                component: ot
            }, {
                path: "/about",
                name: "About",
                component: function() {
                    return t.e("about").then(t.bind(null, "f820"))
                }
            }],
            st = new c["a"]({
                mode: "history",
                base: "/vikincremental/",
                routes: it
            }),
            mt = st,
            ut = (t("c740"), t("5377"), t("c6eb")),
            ct = (t("159b"), t("3f4f")),
            lt = function() {
                var e = Object(b["a"])(regeneratorRuntime.mark((function e() {
                    var a;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if ("indexedDB" in window) {
                                    e.next = 2;
                                    break
                                }
                                throw new Error("Browser does not support IndexedDB");
                            case 2:
                                return a = ["vikings"], e.next = 5, Object(ct["a"])("vikincrement", 1, {
                                    upgrade: function(e) {
                                        a.forEach((function(a) {
                                            console.log("Creating " + a);
                                            var t = e.createObjectStore(a, {
                                                keyPath: "id",
                                                autoIncrement: !0
                                            });
                                            t.createIndex("name", "name")
                                        }))
                                    }
                                });
                            case 5:
                                return e.abrupt("return", e.sent);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            dt = function() {
                var e = Object(b["a"])(regeneratorRuntime.mark((function e(a) {
                    var t, n, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, lt();
                            case 3:
                                return t = e.sent, n = t.transaction(a, "readonly"), r = n.objectStore(a), e.abrupt("return", r.getAll());
                            case 9:
                                return e.prev = 9, e.t0 = e["catch"](0), e.abrupt("return", e.t0);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 9]
                    ])
                })));
                return function(a) {
                    return e.apply(this, arguments)
                }
            }(),
            ht = function() {
                var e = Object(b["a"])(regeneratorRuntime.mark((function e(a) {
                    var t, n, r;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, lt();
                            case 3:
                                return t = e.sent, n = t.transaction(a, "readwrite"), r = n.objectStore(a), r.clear(), e.abrupt("return", n.complete);
                            case 10:
                                return e.prev = 10, e.t0 = e["catch"](0), console.log(e.t0), e.abrupt("return", e.t0);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 10]
                    ])
                })));
                return function(a) {
                    return e.apply(this, arguments)
                }
            }(),
            pt = function() {
                var e = Object(b["a"])(regeneratorRuntime.mark((function e(a, t) {
                    var n, r, o;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, lt();
                            case 3:
                                return n = e.sent, r = n.transaction(a, "readwrite"), o = r.objectStore(a), e.abrupt("return", Promise.all(t.map((function(e) {
                                    return o.put(e)
                                }))).then((function() {
                                    return r.complete
                                })));
                            case 9:
                                return e.prev = 9, e.t0 = e["catch"](0), console.log(e.t0), e.abrupt("return", e.t0);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 9]
                    ])
                })));
                return function(a, t) {
                    return e.apply(this, arguments)
                }
            }(),
            ft = {
                getAll: dt,
                clear: ht,
                save: pt
            },
            bt = t("0ab2"),
            gt = t("d9b6"),
            vt = t("fa15"),
            yt = t("07a9"),
            kt = t("d846"),
            wt = t("6f7d"),
            Rt = t("9561"),
            xt = t("297a"),
            St = t("8012"),
            Ct = {
                itemRateModifier: 1,
                win: !1,
                isPaused: !1,
                isLoading: !1,
                newCraft: !1,
                newAddOn: !1,
                newHouse: !1,
                day: {
                    dayLength: 24,
                    dayTicks: 0,
                    totalDays: 0
                },
                flags: {
                    gameStart: !1,
                    combatUnlocked: !1
                },
                worldTier: 0,
                biomes: St,
                enemyList: Rt,
                bossList: xt,
                tasks: vt,
                houses: gt,
                houseAddOns: kt,
                fortifications: wt,
                food: yt,
                craftables: bt,
                activeTab: "vikings",
                combat: !1,
                delve: !1,
                bossCombat: !1,
                newDay: !1,
                battleLog: "",
                deathMessage: "",
                deathHeader: "",
                isDead: !1,
                attackTicks: 8,
                encounterChance: .25,
                baseEncounterChance: .25,
                maxVikings: 10,
                maxFood: 3,
                comfort: 0,
                baseComfort: 0,
                fortification: 0,
                baseFortification: 0,
                vikings: [],
                ripVikings: [],
                memorial: [],
                inventory: [],
                gear: [],
                house: {
                    name: "None",
                    beds: 0
                },
                enemies: []
            },
            Ot = "vikings";
        n["a"].use(g["a"]);
        var Tt = ut,
            _t = new g["a"].Store({
                state: R["clone"](Ct),
                getters: {
                    canRest: function(e) {
                        return e.comfort > 0
                    },
                    foodBestToWorst: function(e) {
                        var a = R["filter"](e.food, (function(e) {
                            return e.amount >= 1
                        }));
                        return R["orderBy"](a, ["stamina"], ["desc"])
                    },
                    foodWorstToBest: function(e) {
                        var a = R["filter"](e.food, (function(e) {
                            return e.amount >= 1
                        }));
                        return R["orderBy"](a, ["stamina"], ["asc"])
                    },
                    currentBiome: function(e) {
                        return R["find"](e.biomes, (function(a) {
                            return a.worldTier === e.worldTier
                        }))
                    }
                },
                mutations: {
                    init: function(e, a) {
                        Object.assign(e, a)
                    },
                    setField: function(e, a) {
                        e[a.name] = a.value
                    },
                    addViking: function(e, a) {
                        e.vikings.push(a)
                    },
                    addStamina: function(e, a) {
                        var t = Math.round(10 * (e.vikings[a.vikingIndex].stamina += a.staminaCost)) / 10,
                            n = e.vikings[a.vikingIndex].maxStamina;
                        t > n && (t = n), e.vikings[a.vikingIndex].stamina = t
                    },
                    addEnemyStamina: function(e, a) {
                        var t = e.enemies[a.enemyIndex].stamina += a.staminaCost,
                            n = e.enemies[a.enemyIndex].maxStamina;
                        t > n && (t = n), e.enemies[a.enemyIndex].stamina = t
                    },
                    addHealth: function(e, a) {
                        var t = Math.round(10 * (e.vikings[a.vikingIndex].health += a.value)) / 10,
                            n = e.vikings[a.vikingIndex].maxHealth;
                        t > n && (t = n), e.vikings[a.vikingIndex].health = t
                    },
                    incrementArtifact: function(e, a) {
                        var t = A.methods.findItem(e.bossList, a.enemyName);
                        if (!t.defeated) {
                            var n = A.methods.findIndex(e["inventory"], a.key);
                            n >= 0 ? e[a.objectKey][n].amount += a.amount : e[a.objectKey].push({
                                name: a.key,
                                amount: a.amount
                            })
                        }
                    },
                    incrementObject: function(e, a) {
                        var t = A.methods.findIndex(e[a.objectKey], a.key);
                        t >= 0 ? e[a.objectKey][t].amount += a.amount * e.itemRateModifier : e[a.objectKey].push({
                            name: a.key,
                            amount: a.amount * e.itemRateModifier
                        })
                    },
                    decrementObject: function(e, a) {
                        var t = A.methods.findIndex(e[a.objectKey], a.key);
                        t >= 0 && (e[a.objectKey][t].amount -= a.amount)
                    },
                    addGear: function(e, a) {
                        e.gear.push(a)
                    },
                    setHouse: function(e, a) {
                        e.house = a
                    },
                    assignGear: function(e, a) {
                        var t = A.methods.findIndex(e.gear, a.item.name),
                            n = e.gear[t];
                        e.gear.splice(t, 1), e.vikings[a.vikingIndex].gear.push(n)
                    },
                    removeGear: function(e, a) {
                        var t = e.vikings[a.vikingIndex].gear[a.gearIndex];
                        e.vikings[a.vikingIndex].gear.splice(a.gearIndex, 1), e.gear.push(t)
                    },
                    destroyVikingGear: function(e, a) {
                        e.ripVikings[a.vikingIndex].gear.splice(a.gearIndex, 1)
                    },
                    destroyGear: function(e, a) {
                        e.gear.splice(a.index, 1)
                    },
                    removeTask: function(e, a) {
                        var t = R["findIndex"](e.vikings[a.vikingIndex].tasks, (function(e) {
                            return e.name === a.task.name
                        }));
                        e.vikings[a.vikingIndex].tasks.splice(t, 1)
                    },
                    removeObject: function(e, a) {
                        e[a.objectKey].splice(a.index, 1)
                    },
                    setAddOnBuildState: function(e, a) {
                        var t = A.methods.findIndex(e[a.objectKey], a.key);
                        t >= 0 && (e[a.objectKey][t].built = a.state)
                    }
                },
                actions: {
                    initializeCombat: function(e) {
                        return Object(b["a"])(regeneratorRuntime.mark((function a() {
                            var t, n, r, o;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        t = e.state, n = e.dispatch, r = R["filter"](t.enemyList, (function(e) {
                                            return e.worldTier === t.worldTier && (!0 === t.delve && !0 === e.delve || !1 === t.delve && !0 === e.overworld)
                                        })), t.newDay && t.vikings.length && !t.bossCombat && !t.delve && r.length > 0 && (o = Math.random(), t.enemies.length ? t.combat = !0 : o < t.encounterChance ? n("setupCombat", "Starting day " + t.day.totalDays + " on the battlefield...<br/>") : (t.enemies = [], t.combat = !1));
                                    case 3:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    setupCombat: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, o, i, s, m;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        for (n = e.state, n.combat = !0, n.flags.combatUnlocked = !0, n.battleLog = a, n.enemies = [], r = A.methods.randomIntFromInterval(1, n.vikings.length + n.ripVikings.length), o = Math.random(), i = R["filter"](n.enemyList, (function(e) {
                                                return e.worldTier === n.worldTier && e.threshold < o && (!0 === n.delve && !0 === e.delve || !1 === n.delve && !0 === e.overworld)
                                            })), s = 1; s <= r; s++) m = R["clone"](i[A.methods.randomIntFromInterval(0, i.length - 1)]), n.enemies.push(m), n.battleLog += "A " + m.name + " has entered the battlefield!<br/>";
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    challengeBoss: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.state, n.bossCombat = !0, n.combat = !0, n.enemies = [R["clone"](a)], n.battleLog = "You have challenged the mighty " + a.name + "! Do not fear, for even in death you may be rewarded for such bravery.<br/>";
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    initializeDelve: function(e) {
                        return Object(b["a"])(regeneratorRuntime.mark((function a() {
                            var t;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        t = e.state, t.delve = !0, t.battleLog = "You step down into the darkness...<br/>", t.biomes[t.worldTier].delve.mapData = null;
                                    case 4:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    updateMapData: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.state, r = a.index, o = a.mapData, n.biomes[r].delve.mapData = o;
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    addTotem: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.state, r = e.commit, o = Math.random(), o < a.totemDropChance ? (r("incrementObject", {
                                            objectKey: "inventory",
                                            key: a.totem,
                                            amount: 1
                                        }), n.battleLog += "<span class='marker' style='background-color:Fuchsia;color:white;'>Upon a dusty altar you find an " + a.totem + "</span><br/><br/>") : n.battleLog += "A dusty altar sits before you, but it has nothing to offer.<br/>";
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    addTreasure: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.state, r = e.commit, n.battleLog += "You dig into an ancient chest...<br/>", o = 0, R["forEach"](a.treasures.items, (function(e) {
                                            var a = A.methods.randomIntFromInterval(0, e.max);
                                            a > 0 && (r("incrementObject", {
                                                objectKey: "inventory",
                                                key: e.name,
                                                amount: a
                                            }), n.battleLog += "<span class='marker has-background-warning' style='color:black;'>You find " + a + " " + e.name + "!</span><br/><br/>", o++)
                                        })), R["forEach"](a.treasures.food, (function(e) {
                                            var a = A.methods.randomIntFromInterval(0, e.max);
                                            a > 0 && (r("incrementObject", {
                                                objectKey: "food",
                                                key: e.name,
                                                amount: a
                                            }), n.battleLog += "<span class='marker has-background-warning' style='color:black;'>You find " + a + " " + e.name + "!</span><br/><br/>", o++)
                                        })), 0 === o && (n.battleLog += "If any treasure was once here, it is long gone...<br/>");
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    vikingTick: function(e) {
                        return Object(b["a"])(regeneratorRuntime.mark((function a() {
                            var t, n, r, o;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        t = e.state, n = e.commit, r = e.dispatch, o = e.getters, R["forEach"](t.vikings, (function(e, a) {
                                            var i = 0,
                                                s = e.staminaRegen;
                                            if (t.combat || t.delve) {
                                                if (t.day.dayTicks % (t.day.dayLength / t.attackTicks) === 0 && e.stamina > 0 && t.enemies.length && !t.newDay) {
                                                    var m = A.methods.randomIntFromInterval(0, t.enemies.length - 1),
                                                        u = A.methods.getWeapon(e.gear),
                                                        c = Math.random() < u.combat.accuracy,
                                                        l = c ? u.combat.damage : 0,
                                                        d = u.combat.stamina;
                                                    if (t.battleLog += c ? "<span class='has-background-success has-text-light'>" + e.name + " hits " + t.enemies[m].name + " for " + l + " damage and uses " + d + " stamina!</span><br/><br/>" : e.name + " misses and uses " + d + " stamina...<br/><br/>", t.enemies[m].health -= l, t.enemies[m].health <= 0) {
                                                        if (t.battleLog += "<span class='has-background-success has-text-light'>" + e.name + " has defeated " + t.enemies[m].name + "!</span></br>", R["forEach"](t.enemies[m].drops, (function(e) {
                                                                var a = t.bossCombat ? e.amount * t.vikings.length : e.amount;
                                                                n("incrementObject", {
                                                                    objectKey: "inventory",
                                                                    key: e.name,
                                                                    amount: a
                                                                }), t.battleLog += "<span class='has-background-warning has-text-black'>" + t.enemies[m].name + " drops " + a + " " + e.name + "!</span><br/><br/>"
                                                            })), R["forEach"](t.enemies[m].artifacts, (function(e) {
                                                                var a = e.amount;
                                                                n("incrementArtifact", {
                                                                    objectKey: "inventory",
                                                                    key: e.name,
                                                                    amount: a,
                                                                    enemyName: t.enemies[m].name
                                                                }), t.battleLog += "<span class='has-background-warning has-text-black'>" + t.enemies[m].name + " drops " + a + " " + e.name + "!</span><br/><br/>"
                                                            })), t.bossCombat) {
                                                            var h = A.methods.findItem(t.bossList, t.enemies[m].name);
                                                            h.defeated = !0, R["forEach"](t.vikings, (function(e) {
                                                                e.bossesDefeated += 1
                                                            })), h.health = h.maxHealth, h.stamina = h.maxStamina, h.worldTier === t.worldTier && (t.worldTier++, t.worldTier >= t.biomes.length - 1 ? (t.isPaused = !0, t.win = !0) : t.biomes[t.worldTier] && (t.biomes[t.worldTier].unlocked = !0))
                                                        }
                                                        n("removeObject", {
                                                            objectKey: "enemies",
                                                            index: m
                                                        })
                                                    }
                                                    i += d, t.enemies.length || (t.combat = !1, t.battleLog += "<span class='has-background-success has-text-light'>You are victorious on this day!</span><br/>", t.bossCombat && (t.bossCombat = !1))
                                                }
                                            } else R["forEach"](e.tasks, (function(a) {
                                                e.stamina > 0 && (R["forEach"](a.items, (function(e) {
                                                    (!e.worldTier || e.worldTier <= t.worldTier) && n("incrementObject", {
                                                        objectKey: "inventory",
                                                        key: e.name,
                                                        amount: e.perSecond
                                                    })
                                                })), R["forEach"](a.food, (function(e) {
                                                    (!e.worldTier || e.worldTier <= t.worldTier) && n("incrementObject", {
                                                        objectKey: "food",
                                                        key: e.name,
                                                        amount: e.perSecond
                                                    })
                                                })), a.processing && r("processItems", a.processing), i += a.staminaCost)
                                            }));
                                            if (s -= i, n("addStamina", {
                                                    vikingIndex: a,
                                                    staminaCost: s
                                                }), n("addHealth", {
                                                    vikingIndex: a,
                                                    value: e.healthRegen
                                                }), t.newDay && !0 === o.canRest) {
                                                e.stamina = e.baseStamina, e.maxStamina = e.baseStamina, e.maxHealth = e.baseHealth;
                                                var p = 0,
                                                    f = 0,
                                                    b = 0,
                                                    g = [];
                                                g = "best" === e.foodPreference ? o.foodBestToWorst : o.foodWorstToBest, R["forEach"](g, (function(e) {
                                                    b >= t.maxFood || (p += e.stamina, f += e.health, n("decrementObject", {
                                                        objectKey: "food",
                                                        key: e.name,
                                                        amount: 1
                                                    }), b++)
                                                })), e.maxStamina += p, e.stamina += p, e.maxHealth += f, e.staminaRegen = Math.round(10 * (t.comfort + .2 * e.baseStamina - 4)) / 10, e.healthRegen = Math.round(10 * (e.baseHealth / 2 + t.comfort - 12.5)) / 10, n("addHealth", {
                                                    vikingIndex: a,
                                                    value: f / 2
                                                })
                                            }
                                        }));
                                    case 2:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    enemyTick: function(e) {
                        return Object(b["a"])(regeneratorRuntime.mark((function a() {
                            var t, n;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        t = e.state, n = e.commit, t.combat && t.enemies.length && !t.newDay && R["forEach"](t.enemies, (function(e, a) {
                                            var r = 0,
                                                o = e.staminaRegen;
                                            if (t.day.dayTicks % (t.day.dayLength / t.attackTicks) === 0 && e.stamina > 0 && t.vikings.length) {
                                                var i = A.methods.randomIntFromInterval(0, t.vikings.length - 1),
                                                    s = e.attacks[A.methods.randomIntFromInterval(0, e.attacks.length - 1)],
                                                    m = Math.random() < s.accuracy,
                                                    u = A.methods.getArmor(t.vikings[i].gear),
                                                    c = m ? s.damage - u.armorTotal : 0;
                                                c < 0 && (c = 0);
                                                var l = s.stamina;
                                                if (t.battleLog += m ? "<span class='has-background-danger has-text-light'>" + e.name + " hits " + t.vikings[i].name + " for " + c + " damage and uses " + l + " stamina!</span><br/><br/>" : e.name + " misses and uses " + l + " stamina...<br/><br/>", t.vikings[i].health -= c, t.vikings[i].health <= 0) {
                                                    t.battleLog += "<span class='has-background-danger has-text-light'>" + t.vikings[i].name + " has been defeated by " + e.name + "...</span><br/><br/>";
                                                    var d = R["clone"](t.vikings[i]);
                                                    t.ripVikings.push(d), t.vikings.splice(i, 1)
                                                }
                                                r += l
                                            }
                                            if (o -= r, t.vikings.length) n("addEnemyStamina", {
                                                enemyIndex: a,
                                                staminaCost: o
                                            });
                                            else {
                                                var h = "Your party has been eliminated...";
                                                t.battleLog += "<span class='has-background-danger has-text-light'>" + h + "</span><br/><br/>", t.deathHeader = h, t.isDead = !0, t.isPaused = !0
                                            }
                                        }));
                                    case 2:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    clearDead: function(e) {
                        return Object(b["a"])(regeneratorRuntime.mark((function a() {
                            var t;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        t = e.state, t.bossCombat && (t.bossList[t.worldTier].health = t.bossList[t.worldTier].maxHealth, t.bossList[t.worldTier].stamina = t.bossList[t.worldTier].maxStamina), R["forEach"](t.ripVikings, (function(e) {
                                            e.deathday = t.day.totalDays, t.memorial.push(R["clone"](e))
                                        })), t.enemies = [], t.combat = !1, t.delve = !1, t.bossCombat = !1, t.worldTier = 0, t.ripVikings = [], t.bossList = R["clone"](Ct.bossList), t.biomes = R["clone"](Ct.biomes), t.isPaused = !1, t.isDead = !1;
                                    case 13:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    processItems: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.state, r = e.commit, R["forEach"](a, (function(e) {
                                            var a = [];
                                            R["forEach"](e.input, (function(e) {
                                                var t = null;
                                                e.type && "food" === e.type ? (t = A.methods.findItem(n.food, e.name), t && t.amount >= e.amount && a.push({
                                                    type: "food",
                                                    item: e
                                                })) : (t = A.methods.findItem(n.inventory, e.name), t && t.amount >= e.amount && a.push({
                                                    type: "inventory",
                                                    item: e
                                                }))
                                            })), a.length === e.input.length && (R["forEach"](a, (function(e) {
                                                r("decrementObject", {
                                                    objectKey: e.type,
                                                    key: e.item.name,
                                                    amount: e.item.amount
                                                })
                                            })), r("incrementObject", {
                                                objectKey: e.output.type,
                                                key: e.output.name,
                                                amount: e.output.amount
                                            }))
                                        }));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    processingTick: function(e) {
                        return Object(b["a"])(regeneratorRuntime.mark((function a() {
                            var t, n;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        t = e.state, n = e.dispatch, R["forEach"](t.houseAddOns, (function(e) {
                                            e.enabled && n("processItems", e.processing)
                                        }));
                                    case 2:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    tick: function(e) {
                        return Object(b["a"])(regeneratorRuntime.mark((function a() {
                            var t, n;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return t = e.state, n = e.dispatch, t.worldTier > t.biomes.length && (t.isPaused = !0, t.win = !0), t.newDay = !1, t.day.dayTicks === t.day.dayLength && (t.day.dayTicks = 0, t.day.totalDays += 1, t.newDay = !0, t.comfort = t.baseComfort + R["sumBy"](R["filter"](t.houseAddOns, (function(e) {
                                            return !0 === e.built && !0 === e.enabled
                                        })), (function(e) {
                                            return e.comfort ? e.comfort : 0
                                        })), t.fortification = t.baseFortification + R["sumBy"](R["filter"](t.fortifications, (function(e) {
                                            return !0 === e.built && !0 === e.enabled
                                        })), (function(e) {
                                            return e.fortification ? e.fortification : 0
                                        })), t.encounterChance = t.baseEncounterChance + (t.vikings.length + t.ripVikings.length) / 100 + 3 * t.comfort / 100 - 2.5 * t.fortification / 100), t.day.dayTicks++, a.next = 7, n("initializeCombat");
                                    case 7:
                                        return a.next = 9, n("vikingTick");
                                    case 9:
                                        return a.next = 11, n("enemyTick");
                                    case 11:
                                        return a.next = 13, n("processingTick");
                                    case 13:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    createViking: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.state, r = e.commit, n.vikings.length + n.ripVikings.length < n.maxVikings && (o = JSON.parse(JSON.stringify(Tt)), o.birthday = n.day.totalDays, o.name = a || "Viking " + (n.vikings.length + 1), r("addViking", o));
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    burnViking: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, o, i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.state, r = e.commit, o = A.methods.findIndex(n["ripVikings"], a.name), i = R["clone"](n.ripVikings[o]), r("removeObject", {
                                            objectKey: "ripVikings",
                                            index: o
                                        }), R["forEach"](i.gear, (function(e) {
                                            n.gear.push(e)
                                        }));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    reviveViking: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, o, i, s, m;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.state, r = e.commit, o = a.viking, i = a.cost, s = o.name + " gets " + o.bossesDefeated + " point to maximum health and stamina.", n.battleLog += s + "<br/>", n.deathMessage += s + "<br/>", o.tasks = [], o.baseHealthRegen += o.bossesDefeated, o.baseStaminaRegen += o.bossesDefeated, o.baseHealth += o.bossesDefeated, o.baseStamina += o.bossesDefeated, o.maxHealth = o.baseHealth, o.maxStamina = o.baseStamina, o.health = o.baseHealth, o.stamina = o.baseStamina, o.staminaRegen = o.baseStaminaRegen, o.healthRegen = o.baseHealthRegen, o.bossesDefeated = 0, n.vikings.push(R["clone"](o)), r("decrementObject", {
                                            objectKey: "inventory",
                                            key: "Ichor",
                                            amount: i
                                        }), m = A.methods.findIndex(n["ripVikings"], o.name), r("removeObject", {
                                            objectKey: "ripVikings",
                                            index: m
                                        });
                                    case 22:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    convertVikingGear: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, o, i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.state, r = e.commit, o = a.item.cost, r("incrementObject", {
                                            objectKey: "inventory",
                                            key: "Ichor",
                                            amount: o
                                        }), r("destroyVikingGear", {
                                            gearIndex: a.gearIndex,
                                            vikingIndex: a.vikingIndex
                                        }), i = R["filter"](n.ripVikings[a.vikingIndex].tasks, (function(e) {
                                            if (!e.requirements || !e.requirements.length) return !1;
                                            var t = R["filter"](e.requirements, (function(e) {
                                                return R["filter"](n.ripVikings[a.vikingIndex].gear, (function(a) {
                                                    return a.name === e
                                                })).length
                                            })).length;
                                            return t <= 0
                                        })), R["forEach"](i, (function(e) {
                                            r("removeTask", {
                                                vikingIndex: a.vikingIndex,
                                                task: e
                                            })
                                        }));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    convertGear: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, r = a.item.cost, n("incrementObject", {
                                            objectKey: "inventory",
                                            key: "Ichor",
                                            amount: r
                                        }), n("destroyGear", a);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    unequipGear: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.state, r = e.commit, r("removeGear", a), o = R["filter"](n.vikings[a.vikingIndex].tasks, (function(e) {
                                            if (!e.gearRequirements || !e.gearRequirements.length) return !1;
                                            var t = R["filter"](e.gearRequirements, (function(e) {
                                                return R["filter"](n.vikings[a.vikingIndex].gear, (function(a) {
                                                    return a.name === e
                                                })).length
                                            })).length;
                                            return t <= 0
                                        })), R["forEach"](o, (function(e) {
                                            r("removeTask", {
                                                vikingIndex: a.vikingIndex,
                                                task: e
                                            })
                                        }));
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    craftGear: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, r = R["clone"](a), R["forEach"](a.components, (function(e) {
                                            n("decrementObject", {
                                                objectKey: "inventory",
                                                key: e.name,
                                                amount: e.amount
                                            })
                                        })), n("addGear", r);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    updateHouse: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, r = Object.assign({}, a), R["forEach"](a.components, (function(e) {
                                            n("decrementObject", {
                                                objectKey: "inventory",
                                                key: e.name,
                                                amount: e.amount
                                            })
                                        })), n("setHouse", r);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    craftAddOn: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, R["forEach"](a.components, (function(e) {
                                            n("decrementObject", {
                                                objectKey: "inventory",
                                                key: e.name,
                                                amount: e.amount
                                            })
                                        })), n("setAddOnBuildState", {
                                            objectKey: "houseAddOns",
                                            key: a.name,
                                            state: !0
                                        });
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    craftFortification: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, R["forEach"](a.components, (function(e) {
                                            n("decrementObject", {
                                                objectKey: "inventory",
                                                key: e.name,
                                                amount: e.amount
                                            })
                                        })), n("setAddOnBuildState", {
                                            objectKey: "fortifications",
                                            key: a.name,
                                            state: !0
                                        });
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    clear: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, n("setField", {
                                            name: "isLoading",
                                            value: !0
                                        }), ft.clear(a), n("setField", {
                                            name: "isLoading",
                                            value: !0
                                        });
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    saveToDb: function(e) {
                        return Object(b["a"])(regeneratorRuntime.mark((function a() {
                            var t, n, r;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return t = e.state, n = e.commit, r = e.dispatch, n("setField", {
                                            name: "isLoading",
                                            value: !0
                                        }), a.next = 4, r("clear", Ot);
                                    case 4:
                                        return a.prev = 4, a.next = 7, ft.save(Ot, [t]);
                                    case 7:
                                        a.next = 12;
                                        break;
                                    case 9:
                                        a.prev = 9, a.t0 = a["catch"](4), console.log("Error saving " + Ot + ": " + a.t0);
                                    case 12:
                                        n("setField", {
                                            name: "isLoading",
                                            value: !0
                                        });
                                    case 13:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [4, 9]
                            ])
                        })))()
                    },
                    reset: function(e) {
                        return Object(b["a"])(regeneratorRuntime.mark((function a() {
                            var t;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        t = e.commit, t("init", R["clone"](Ct));
                                    case 2:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    newGame: function(e, a) {
                        return Object(b["a"])(regeneratorRuntime.mark((function t() {
                            var n, r, o;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        n = e.commit, r = e.dispatch, o = R["clone"](Ct), o.flags.gameStart = !0, n("init", o), r("createViking", a.name);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    initialize: function(e) {
                        return Object(b["a"])(regeneratorRuntime.mark((function a() {
                            var t, n;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        return t = e.commit, t("setField", {
                                            name: "isLoading",
                                            value: !0
                                        }), a.prev = 2, a.next = 5, ft.getAll(Ot);
                                    case 5:
                                        if (n = a.sent, null !== n) {
                                            a.next = 10;
                                            break
                                        }
                                        throw new Error("Could not load save data!");
                                    case 10:
                                        0 === n.length ? console.log("No saved data found") : (console.log("Loaded from save"), t("init", n[0]));
                                    case 11:
                                        a.next = 16;
                                        break;
                                    case 13:
                                        a.prev = 13, a.t0 = a["catch"](2), console.log(a.t0);
                                    case 16:
                                        t("setField", {
                                            name: "isLoading",
                                            value: !1
                                        });
                                    case 17:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [2, 13]
                            ])
                        })))()
                    }
                },
                modules: {}
            }),
            It = t("289d");
        t("73ec"), t("5363");
        n["a"].use(It["a"]), n["a"].config.productionTip = !1, new n["a"]({
            router: mt,
            store: _t,
            render: function(e) {
                return e(u)
            }
        }).$mount("#app")
    },
    "5f32": function(e, a, t) {
        "use strict";
        t("715c")
    },
    "6e55": function(e, a, t) {},
    "6f7d": function(e) {
        e.exports = JSON.parse('[{"name":"Wood Torches","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Workbench"],"fortification":1,"components":[{"name":"Wood","amount":10},{"name":"Resin","amount":10}]},{"name":"Wood Walls","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Workbench"],"fortification":1,"components":[{"name":"Wood","amount":200}]},{"name":"Wood Spikes","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Forge"],"fortification":1,"components":[{"name":"Hard Wood","amount":200}]},{"name":"Stone Walls","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Stonecutter"],"fortification":1,"components":[{"name":"Stone","amount":1000}]},{"name":"Watchtowers","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Stonecutter"],"fortification":1,"components":[{"name":"Stone","amount":500},{"name":"Hard Wood","amount":200}]},{"name":"Moat","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Stonecutter"],"fortification":1,"components":[{"name":"Stone","amount":500}]},{"name":"Iron Gates","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Smith\'s Anvil"],"fortification":1,"components":[{"name":"Iron Bar","amount":30}]},{"name":"Portcullis","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Blast Furnace"],"fortification":1,"components":[{"name":"Steel Bar","amount":30},{"name":"Stone","amount":250},{"name":"Hard Wood","amount":200}]},{"name":"Parapets","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Blast Furnace"],"fortification":1,"components":[{"name":"Steel Bar","amount":30},{"name":"Stone","amount":500},{"name":"Hard Wood","amount":200}]},{"name":"Keep","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Artisan Table"],"fortification":1,"components":[{"name":"Iron Bar","amount":30},{"name":"Steel Bar","amount":30},{"name":"Silver Bar","amount":10},{"name":"Gold Bar","amount":10},{"name":"Stone","amount":500},{"name":"Hard Wood","amount":200}]},{"name":"Wards","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Artisan Table"],"fortification":1,"components":[{"name":"Titanium Bar","amount":30},{"name":"Obsidian","amount":1000},{"name":"Ichor","amount":500},{"name":"Ornate Wood","amount":200}]}]')
    },
    "715c": function(e, a, t) {},
    "73ec": function(e, a, t) {},
    8012: function(e) {
        e.exports = JSON.parse('[{"worldTier":0,"name":"Grasslands","unlocked":true,"flavor":"A verdant paradise of sprawling hillsides dotted with trees and shrubbery.","delve":{"xLength":10,"yHeight":10,"spawns":3,"totems":3,"treasure":5,"mapData":null,"totem":"Ikon of the Bounty","totemDropChance":0.5,"treasures":{"items":[],"food":[{"name":"Yellow Mushrooms","max":1}]}}},{"worldTier":1,"name":"Forest","unlocked":false,"flavor":"Light filtered though the lush canopy provides a heavenly atmosphere, until night falls.","delve":{"xLength":20,"yHeight":20,"spawns":6,"totems":3,"treasure":6,"mapData":null,"totem":"Ikon of Renewal","totemDropChance":0.5,"treasures":{"items":[{"name":"Dwarven Core","max":3}],"food":[{"name":"Yellow Mushrooms","max":4}]}}},{"worldTier":2,"name":"Swamps","unlocked":false,"flavor":"On the fringe it appears to be a thriving wetland. Deeper in, the air is thick with noxious haze, unknown sounds permeate the stagnant atmosphere, and the dense foliage blocks the sunlight.","delve":{"xLength":25,"yHeight":25,"spawns":8,"totems":4,"treasure":8,"mapData":null,"totem":"Ikon of Decay","totemDropChance":0.5,"treasures":{"items":[{"name":"Chains","max":3},{"name":"Dwarven Core","max":3}],"food":[{"name":"Yellow Mushrooms","max":4}]}}},{"worldTier":3,"name":"Mountains","unlocked":false,"flavor":"Appearing serene and peaceful from a distnace, the mountains are a craggy and harsh enviornment. Its peaks stretch above the clouds, hiding what exists beyond the earth below.","delve":{"xLength":30,"yHeight":30,"spawns":8,"totems":4,"treasure":8,"mapData":null,"totem":"Ikon of Regret","totemDropChance":0.5,"treasures":{"items":[{"name":"Dwarven Core","max":3}],"food":[{"name":"Yellow Mushrooms","max":4}]}}},{"worldTier":4,"name":"Plains","unlocked":false,"flavor":"A wind-swept valley hidden by the surrounding mountains. These fertile lands are home to many grazing beasts and other natural resources.","delve":{"xLength":35,"yHeight":35,"spawns":8,"totems":4,"treasure":8,"mapData":null,"totem":"Ikon of the Wind","totemDropChance":0.5,"treasures":{"items":[{"name":"Dwarven Core","max":3}],"food":[{"name":"Yellow Mushrooms","max":4}]}}},{"worldTier":5,"name":"Ruined City","unlocked":false,"flavor":"Crumbling spires that once touched the sky now lie broken. Grand structures now give way to the elements. The sprawling ruins hint at a once vibrant civilation. No evidence remains of their fate.","delve":{"xLength":40,"yHeight":40,"spawns":10,"totems":4,"treasure":10,"mapData":null,"totem":"Ikon of Pride","totemDropChance":0.5,"treasures":{"items":[{"name":"Chains","max":1},{"name":"Dwarven Core","max":3},{"name":"Gold Ore","max":20}],"food":[{"name":"Yellow Mushrooms","max":4}]}}},{"worldTier":6,"name":"Caldera","unlocked":false,"flavor":"Swirling formations of old rock that once flowed like rivers have shaped the landscape into a treacherous domain. While not a welcoming sight, those brave enough may be rewarded.","delve":{"xLength":40,"yHeight":40,"spawns":10,"totems":4,"treasure":10,"mapData":null,"totem":"Ikon of the Primordial","totemDropChance":0.5,"treasures":{"items":[{"name":"Dwarven Core","max":3}],"food":[{"name":"Yellow Mushrooms","max":4}]}}},{"worldTier":7,"name":"Valhalla","unlocked":false,"flavor":"Peace. Merriment. Food and drink. Prove yourself to earn your place."},{"worldTier":8,"name":"The End","unlocked":false,"flavor":"Feast in the great halls of Valhalla, brave vikings!"}]')
    },
    9561: function(e) {
        e.exports = JSON.parse('[{"name":"Goblin Youngling","worldTier":0,"delve":false,"overworld":true,"threshold":0,"stamina":15,"health":15,"maxStamina":15,"maxHealth":15,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Swipe","damage":10,"stamina":10,"accuracy":0.45}],"drops":[{"name":"Ichor","amount":1}]},{"name":"Bee Hive","worldTier":0,"delve":false,"overworld":true,"threshold":0.9,"stamina":10,"health":10,"maxStamina":10,"maxHealth":10,"staminaRegen":0,"baseStaminaRegen":0,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Sting","damage":1,"stamina":10,"accuracy":0.85}],"drops":[{"name":"Queen Bee","amount":1}]},{"name":"Skeleton","worldTier":0,"delve":true,"overworld":false,"threshold":0,"stamina":25,"health":25,"maxStamina":25,"maxHealth":25,"staminaRegen":2,"baseStaminaRegen":2,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Sword Swing","damage":15,"stamina":10,"accuracy":0.55}],"drops":[{"name":"Bones","amount":1},{"name":"Ichor","amount":1}]},{"name":"Skeleton","worldTier":1,"delve":true,"overworld":false,"threshold":0,"stamina":30,"health":30,"maxStamina":30,"maxHealth":30,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Sword Swing","damage":20,"stamina":10,"accuracy":0.55}],"drops":[{"name":"Bones","amount":1},{"name":"Ichor","amount":1}]},{"name":"Goblin Scout","worldTier":1,"delve":false,"overworld":true,"threshold":0,"stamina":30,"health":30,"maxStamina":30,"maxHealth":30,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Swipe","damage":20,"stamina":10,"accuracy":0.55}],"drops":[{"name":"Ichor","amount":1}]},{"name":"Goblin Brute","worldTier":1,"delve":false,"overworld":true,"threshold":0.2,"stamina":40,"health":50,"maxStamina":40,"maxHealth":50,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Club","damage":30,"stamina":15,"accuracy":0.55}],"drops":[{"name":"Ichor","amount":1}]},{"name":"Troll","worldTier":1,"delve":true,"overworld":true,"threshold":0.8,"stamina":100,"health":100,"maxStamina":100,"maxHealth":100,"staminaRegen":3,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Club Smash","damage":50,"stamina":30,"accuracy":0.35},{"name":"Club Swipe","damage":20,"stamina":20,"accuracy":0.45}],"drops":[{"name":"Ichor","amount":5},{"name":"Troll Hide","amount":5}]},{"name":"Troll","worldTier":1,"delve":true,"overworld":true,"threshold":0.75,"stamina":100,"health":100,"maxStamina":100,"maxHealth":100,"staminaRegen":3,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Smash","damage":30,"stamina":20,"accuracy":0.45},{"name":"Rock Throw","damage":30,"stamina":20,"accuracy":0.35}],"drops":[{"name":"Troll Hide","amount":5},{"name":"Ichor","amount":5}]},{"name":"Wraith","worldTier":2,"delve":true,"overworld":false,"threshold":0.85,"stamina":50,"health":200,"maxStamina":50,"maxHealth":200,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":1,"baseHealthRegen":1,"attacks":[{"name":"Possess","damage":40,"stamina":15,"accuracy":0.8},{"name":"Frighten","damage":70,"stamina":15,"accuracy":0.55}],"drops":[{"name":"Chains","amount":1},{"name":"Ichor","amount":2}]},{"name":"Skeleton","worldTier":2,"delve":true,"overworld":true,"threshold":0,"stamina":50,"health":75,"maxStamina":50,"maxHealth":75,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Sword Swing","damage":50,"stamina":10,"accuracy":0.5}],"drops":[{"name":"Bones","amount":1},{"name":"Ichor","amount":1}]},{"name":"Draugr","worldTier":2,"delve":true,"overworld":true,"threshold":0,"stamina":75,"health":100,"maxStamina":75,"maxHealth":100,"staminaRegen":2,"baseStaminaRegen":2,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Swing","damage":55,"stamina":15,"accuracy":0.65},{"name":"Bash","damage":40,"stamina":15,"accuracy":0.8}],"drops":[{"name":"Entrails","amount":4},{"name":"Ichor","amount":1}]},{"name":"Slime","worldTier":2,"delve":true,"overworld":true,"threshold":0.1,"stamina":100,"health":200,"maxStamina":100,"maxHealth":200,"staminaRegen":2,"baseStaminaRegen":2,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Foul Stench","damage":60,"stamina":5,"accuracy":0.3},{"name":"Lunge","damage":80,"stamina":10,"accuracy":0.2}],"drops":[{"name":"Resin","amount":4},{"name":"Ichor","amount":2}]},{"name":"Wolf","worldTier":3,"delve":true,"overworld":true,"threshold":0,"stamina":50,"health":100,"maxStamina":50,"maxHealth":100,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Bite","damage":90,"stamina":20,"accuracy":0.55},{"name":"Claw","damage":65,"stamina":15,"accuracy":0.75}],"drops":[{"name":"Wolf Hide","amount":3},{"name":"Ichor","amount":1}]},{"name":"Werewolf","worldTier":3,"delve":true,"overworld":true,"threshold":0,"stamina":75,"health":200,"maxStamina":75,"maxHealth":200,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Bite","damage":100,"stamina":15,"accuracy":0.45},{"name":"Claw","damage":75,"stamina":15,"accuracy":0.75}],"drops":[{"name":"Wolf Hide","amount":5},{"name":"Ichor","amount":2},{"name":"Ichor Shard","amount":1}]},{"name":"Stone Golem","worldTier":3,"delve":true,"overworld":true,"threshold":0.8,"stamina":100,"health":400,"maxStamina":100,"maxHealth":400,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Smash","damage":150,"stamina":15,"accuracy":0.1},{"name":"Smash","damage":120,"stamina":15,"accuracy":0.1},{"name":"Smash","damage":100,"stamina":15,"accuracy":0.1}],"drops":[{"name":"Ichor","amount":50},{"name":"Ichor Shard","amount":1}]},{"name":"Skeleton","worldTier":3,"delve":true,"overworld":false,"threshold":0,"stamina":75,"health":100,"maxStamina":75,"maxHealth":100,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Sword Swing","damage":90,"stamina":10,"accuracy":0.55}],"drops":[{"name":"Bones","amount":1},{"name":"Ichor","amount":1}]},{"name":"Dark Elf","worldTier":3,"delve":true,"overworld":false,"threshold":0,"stamina":100,"health":150,"maxStamina":100,"maxHealth":150,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Stab","damage":80,"stamina":20,"accuracy":0.75},{"name":"Slash","damage":70,"stamina":10,"accuracy":0.85}],"drops":[{"name":"Ichor","amount":1}]},{"name":"Drake","worldTier":4,"delve":false,"overworld":true,"threshold":0,"stamina":100,"health":175,"maxStamina":100,"maxHealth":175,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Slash","damage":80,"stamina":20,"accuracy":0.45},{"name":"Swoop","damage":70,"stamina":20,"accuracy":0.65}],"drops":[{"name":"Ichor","amount":1}]},{"name":"Lizardman","worldTier":4,"delve":true,"overworld":true,"threshold":0,"stamina":100,"health":180,"maxStamina":100,"maxHealth":180,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Slash","damage":75,"stamina":15,"accuracy":0.65}],"drops":[{"name":"Ichor","amount":2}]},{"name":"Lizardbrute","worldTier":4,"delve":true,"overworld":true,"threshold":0.2,"stamina":100,"health":250,"maxStamina":100,"maxHealth":250,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Smash","damage":80,"stamina":15,"accuracy":0.55},{"name":"Pound","damage":100,"stamina":20,"accuracy":0.4}],"drops":[{"name":"Ichor","amount":3},{"name":"Ichor Shard","amount":1}]},{"name":"Draugr Warrior","worldTier":5,"delve":false,"overworld":true,"threshold":0,"stamina":150,"health":200,"maxStamina":150,"maxHealth":200,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Sword Swing","damage":100,"stamina":20,"accuracy":0.75},{"name":"Stab","damage":150,"stamina":30,"accuracy":0.55}],"drops":[{"name":"Ichor","amount":4}]},{"name":"Draugr Warrior","worldTier":5,"delve":true,"overworld":false,"threshold":0.3,"stamina":150,"health":200,"maxStamina":150,"maxHealth":200,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Sword Swing","damage":100,"stamina":20,"accuracy":0.75},{"name":"Stab","damage":150,"stamina":30,"accuracy":0.55}],"drops":[{"name":"Ichor","amount":4}]},{"name":"Draugr Noble","worldTier":5,"delve":true,"overworld":false,"threshold":0,"stamina":100,"health":100,"maxStamina":100,"maxHealth":100,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Slash","damage":10,"stamina":20,"accuracy":0.75}],"drops":[{"name":"Ichor","amount":1},{"name":"Gold Ore","amount":10}]},{"name":"Shadow","worldTier":5,"delve":true,"overworld":true,"threshold":0.7,"stamina":150,"health":300,"maxStamina":150,"maxHealth":300,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Spook","damage":100,"stamina":20,"accuracy":0.75},{"name":"Terror","damage":120,"stamina":30,"accuracy":0.45}],"drops":[{"name":"Chains","amount":1},{"name":"Ichor","amount":10},{"name":"Ichor Shard","amount":1}]},{"name":"Spectre","worldTier":5,"delve":true,"overworld":true,"threshold":0.5,"stamina":150,"health":500,"maxStamina":150,"maxHealth":500,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Spook","damage":90,"stamina":20,"accuracy":0.75},{"name":"Terror","damage":130,"stamina":30,"accuracy":0.45}],"drops":[{"name":"Chains","amount":1},{"name":"Ichor","amount":10},{"name":"Ichor Shard","amount":1}]},{"name":"Surtling","worldTier":6,"delve":true,"overworld":true,"threshold":0,"stamina":200,"health":300,"maxStamina":200,"maxHealth":300,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"attacks":[{"name":"Fireball","damage":100,"stamina":15,"accuracy":0.85},{"name":"Immolate","damage":175,"stamina":15,"accuracy":0.45}],"drops":[{"name":"Ichor","amount":10},{"name":"Ichor Shard","amount":1}]}]')
    },
    ad27: function(e, a, t) {},
    c0a4: function(e) {
        e.exports = JSON.parse('["The Eagle","The Bear","The Wolf","The Raven","The Dove","The Wise","The Clever","The Timid","The Peaceful","The Fighter","The Helpful","The Wild","The Pious","The Large","The Small","The Wide","The Blind","The Stone","The Poor","The Rich","The Beautiful","The Axe","The Arrow","The Shield"]')
    },
    c6eb: function(e) {
        e.exports = JSON.parse('{"name":"Viking 1","stamina":25,"health":25,"baseStamina":25,"baseHealth":25,"maxStamina":25,"maxHealth":25,"staminaRegen":1,"baseStaminaRegen":1,"healthRegen":0,"baseHealthRegen":0,"gear":[],"tasks":[],"foodPreference":"best","birthday":0,"deathday":0,"bossesDefeated":0}')
    },
    c75c: function(e) {
        e.exports = JSON.parse('["Arne","Birger","Bjørn","Bo","Erik","Frode","Gorm","Halfdan","Harald","Knud","Kåre","Leif","Njal","Roar","Rune","Sten","Skarde","Sune","Svend","Troels","Toke","Torsten","Trygve","Ulf","Ødger","Åge","Astrid","Bodil","Frida","Gertrud","Gro","Estrid","Hilda","Gudrun","Gunhild","Helga","Inga","Liv","Randi","Signe","Sigrid","Revna","Sif","Tora","Tove","Thyra","Thurid","Yrsa","Ulfhild","Åse"]')
    },
    ced6: function(e, a, t) {},
    d846: function(e) {
        e.exports = JSON.parse('[{"name":"Blast Furnace","type":"processing","tooltip":"Technology that brings even more advanced arms and armor.","built":false,"enabled":false,"bedRequirement":2,"gearRequirements":[],"addOnRequirements":["Bellows"],"components":[{"name":"Ornate Wood","amount":100},{"name":"Dwarven Core","amount":60},{"name":"Iron Bar","amount":10},{"name":"Stone","amount":20},{"name":"Sharpening Stone","amount":1}],"processing":[{"input":[{"name":"Coal","amount":2},{"name":"Obsidian","amount":1},{"name":"Iron Ore","amount":1}],"output":{"name":"Steel Bar","amount":1,"type":"inventory"}},{"input":[{"name":"Coal","amount":2},{"name":"Obsidian","amount":1},{"name":"Silver Ore","amount":1}],"output":{"name":"Silver Bar","amount":1,"type":"inventory"}},{"input":[{"name":"Coal","amount":2},{"name":"Obsidian","amount":2},{"name":"Gold Ore","amount":1}],"output":{"name":"Gold Bar","amount":1,"type":"inventory"}},{"input":[{"name":"Coal","amount":2},{"name":"Obsidian","amount":3},{"name":"Titanium Ore","amount":1}],"output":{"name":"Titanium Bar","amount":1,"type":"inventory"}}]},{"name":"Smelter","type":"processing","tooltip":"The basis for crafting advanced arms and armor.","gearRequirements":[],"addOnRequirements":["Workbench"],"built":false,"enabled":false,"components":[{"name":"Stone","amount":50},{"name":"Dwarven Core","amount":5}],"processing":[{"input":[{"name":"Coal","amount":2},{"name":"Copper Ore","amount":1}],"output":{"name":"Copper Bar","amount":1,"type":"inventory"}},{"input":[{"name":"Coal","amount":1},{"name":"Tin Ore","amount":1}],"output":{"name":"Tin Bar","amount":1,"type":"inventory"}},{"input":[{"name":"Coal","amount":1},{"name":"Iron Ore","amount":1}],"output":{"name":"Iron Bar","amount":1,"type":"inventory"}}]},{"name":"Kiln","type":"processing","tooltip":"A staple of any forge.","gearRequirements":[],"addOnRequirements":["Workbench"],"built":false,"enabled":false,"components":[{"name":"Stone","amount":50},{"name":"Dwarven Core","amount":5}],"processing":[{"input":[{"name":"Wood","amount":1}],"output":{"name":"Coal","amount":1,"type":"inventory"}}]},{"name":"Fermenter","type":"processing","tooltip":"Brew your favorite mead and other sweets.","built":false,"enabled":false,"gearRequirements":[],"bedRequirement":2,"addOnRequirements":["Forge"],"comfort":0,"components":[{"name":"Ornate Wood","amount":25},{"name":"Copper Bar","amount":10},{"name":"Tin Bar","amount":5},{"name":"Resin","amount":4}],"processing":[{"input":[{"name":"Honey","amount":1,"type":"food"},{"name":"Winterberries","amount":3,"type":"food"},{"name":"Wheat","amount":1}],"output":{"name":"Mead","amount":1,"type":"food"}},{"input":[{"name":"Honey","amount":1,"type":"food"},{"name":"Blueberries","amount":3,"type":"food"},{"name":"Berries","amount":3,"type":"food"}],"output":{"name":"Sweet Jam","amount":1,"type":"food"}}]},{"name":"Cooking Pot","type":"processing","tooltip":"A culinary tool for advanced recipes.","built":false,"enabled":false,"gearRequirements":[],"bedRequirement":2,"addOnRequirements":["Forge"],"comfort":0,"components":[{"name":"Tin Bar","amount":10}],"processing":[{"input":[{"name":"Wood","amount":1},{"name":"Raw Fish","amount":1},{"name":"Flour","amount":1}],"output":{"name":"Fish Wraps","amount":1,"type":"food"}},{"input":[{"name":"Wood","amount":1},{"name":"Raw Serpent Meat","amount":1},{"name":"Mushrooms","amount":1,"type":"food"},{"name":"Turnips","amount":1,"type":"food"}],"output":{"name":"Serpent Stew","amount":1,"type":"food"}},{"input":[{"name":"Wood","amount":1},{"name":"Raw Large Game Meat","amount":1},{"name":"Mushrooms","amount":1,"type":"food"},{"name":"Carrots","amount":1,"type":"food"},{"name":"Flour","amount":1}],"output":{"name":"Meat Pie","amount":1,"type":"food"}},{"input":[{"name":"Wood","amount":1},{"name":"Raw Meat","amount":1},{"name":"Turnips","amount":3,"type":"food"}],"output":{"name":"Turnip Stew","amount":1,"type":"food"}},{"input":[{"name":"Wood","amount":1},{"name":"Carrots","amount":3,"type":"food"},{"name":"Mushrooms","amount":1,"type":"food"}],"output":{"name":"Carrot Soup","amount":1,"type":"food"}},{"input":[{"name":"Wood","amount":1},{"name":"Raw Meat","amount":1},{"name":"Entrails","amount":1}],"output":{"name":"Sausages","amount":1,"type":"food"}}]},{"name":"Cooking Station","type":"processing","tooltip":"The basis for staving off hunger.","built":false,"enabled":false,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Campfire"],"comfort":0,"components":[{"name":"Wood","amount":5}],"processing":[{"input":[{"name":"Wood","amount":1},{"name":"Raw Meat","amount":1}],"output":{"name":"Cooked Meat","amount":1,"type":"food"}},{"input":[{"name":"Wood","amount":1},{"name":"Raw Large Game Meat","amount":1}],"output":{"name":"Large Game Meat","amount":1,"type":"food"}},{"input":[{"name":"Wood","amount":1},{"name":"Raw Serpent Meat","amount":1}],"output":{"name":"Serpent Meat","amount":1,"type":"food"}},{"input":[{"name":"Wood","amount":1},{"name":"Flour","amount":2}],"output":{"name":"Bread","amount":1,"type":"food"}}]},{"name":"Windmill","type":"processing","tooltip":"Harnesses the power of the wind to process nature\'s staples.","built":false,"enabled":false,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Artisan Table"],"comfort":0,"components":[{"name":"Wood","amount":30},{"name":"Stone","amount":20},{"name":"Dwarven Core","amount":20},{"name":"Iron Bar","amount":30}],"processing":[{"input":[{"name":"Wheat","amount":1}],"output":{"name":"Flour","amount":1,"type":"inventory"}}]},{"name":"Spinning Wheel","type":"processing","tooltip":"A tool for creating fine threads and rope.","built":false,"enabled":false,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Artisan Table"],"comfort":0,"components":[{"name":"Ornate Wood","amount":30},{"name":"Leather Scraps","amount":20},{"name":"Iron Bar","amount":10}],"processing":[{"input":[{"name":"Flax","amount":1}],"output":{"name":"Threads","amount":1,"type":"inventory"}}]},{"name":"Bee Hive","type":"processing","tooltip":"A sustainable food source.","built":false,"enabled":false,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Hammer"],"comfort":0,"components":[{"name":"Wood","amount":5},{"name":"Queen Bee","amount":1}],"processing":[{"input":[],"output":{"name":"Honey","amount":0.5,"type":"food"}}]},{"name":"Hammer","type":"workbench","tooltip":"The start of any homestead.","built":false,"enabled":true,"bedRequirement":0,"gearRequirements":[],"addOnRequirements":[],"components":[{"name":"Wood","amount":4}],"processing":[]},{"name":"Workbench","type":"workbench","tooltip":"The foundation of making a house a home, and more.","built":false,"enabled":false,"bedRequirement":1,"gearRequirements":[],"addOnRequirements":["Hammer"],"components":[{"name":"Wood","amount":8}],"processing":[]},{"name":"Chopping Block","type":"workbench","tooltip":"Woodcutting is necessary work to survive.","built":false,"enabled":false,"bedRequirement":1,"gearRequirements":[],"addOnRequirements":["Workbench"],"components":[{"name":"Wood","amount":8},{"name":"Stone","amount":5}],"processing":[]},{"name":"Tanning Rack","type":"workbench","tooltip":"A necessity for creating basic arms and armor.","built":false,"enabled":false,"bedRequirement":1,"gearRequirements":[],"addOnRequirements":["Workbench"],"components":[{"name":"Wood","amount":15},{"name":"Leather Scraps","amount":25},{"name":"Leather Hide","amount":5}],"processing":[]},{"name":"Adze","type":"workbench","tooltip":"A tool used for fine woodworking.","built":false,"enabled":false,"bedRequirement":1,"gearRequirements":[],"addOnRequirements":["Forge"],"components":[{"name":"Hard Wood","amount":10},{"name":"Copper Bar","amount":6},{"name":"Tin Bar","amount":3}],"processing":[]},{"name":"Tool Rack","type":"workbench","tooltip":"An organized workshop allows focusing on more advanced projects.","built":false,"enabled":false,"bedRequirement":1,"gearRequirements":[],"addOnRequirements":["Smith\'s Anvil"],"components":[{"name":"Hard Wood","amount":10},{"name":"Iron Bar","amount":5},{"name":"Obsidian","amount":5}],"processing":[]},{"name":"Forge","type":"forge","tooltip":"An advanced tool for metallurgy.","built":false,"enabled":false,"bedRequirement":2,"gearRequirements":[],"addOnRequirements":["Smelter"],"components":[{"name":"Stone","amount":4},{"name":"Coal","amount":4},{"name":"Wood","amount":10},{"name":"Copper Bar","amount":6}],"processing":[]},{"name":"Forge Cooler","type":"forge","tooltip":"Better heat control means better craftsmanship.","built":false,"enabled":false,"bedRequirement":2,"gearRequirements":[],"addOnRequirements":["Forge"],"components":[{"name":"Wood","amount":20},{"name":"Copper Bar","amount":10}],"processing":[]},{"name":"Anvil","type":"forge","tooltip":"Used for shaping soft metals.","built":false,"enabled":false,"bedRequirement":2,"gearRequirements":[],"addOnRequirements":["Forge Cooler"],"components":[{"name":"Wood","amount":10},{"name":"Copper Bar","amount":4},{"name":"Tin Bar","amount":2}],"processing":[]},{"name":"Smith\'s Anvil","type":"forge","tooltip":"Necessary for shaping hard metals.","built":false,"enabled":false,"bedRequirement":2,"gearRequirements":[],"addOnRequirements":["Anvil"],"components":[{"name":"Wood","amount":10},{"name":"Iron Bar","amount":15}],"processing":[]},{"name":"Forge Toolrack","type":"forge","tooltip":"An organized workshop allows focusing on more advanced projects.","built":false,"enabled":false,"bedRequirement":2,"gearRequirements":[],"addOnRequirements":["Anvil"],"components":[{"name":"Wood","amount":10},{"name":"Iron Bar","amount":25}],"processing":[]},{"name":"Bellows","type":"forge","tooltip":"Better heat control means better craftsmanship.","built":false,"enabled":false,"bedRequirement":2,"gearRequirements":[],"addOnRequirements":["Forge Toolrack"],"components":[{"name":"Wood","amount":10},{"name":"Leather Hide","amount":10},{"name":"Iron Bar","amount":5},{"name":"Chains","amount":20}],"processing":[]},{"name":"Artisan Table","type":"forge","tooltip":"Imbued with magical properties for advanced metallurgy.","built":false,"enabled":false,"bedRequirement":10,"gearRequirements":[],"addOnRequirements":["Blast Furnace"],"components":[{"name":"Wood","amount":20},{"name":"Ichor Shard","amount":1},{"name":"Dwarven Core","amount":20}],"processing":[]},{"name":"Grinding Wheel","type":"forge","tooltip":"","built":false,"enabled":false,"bedRequirement":2,"gearRequirements":[],"addOnRequirements":["Stonecutter"],"components":[{"name":"Wood","amount":25},{"name":"Sharpening Stone","amount":1}],"processing":[]},{"name":"Stonecutter","type":"forge","tooltip":"With the strength of stone, a house can become a fortress.","built":false,"enabled":false,"bedRequirement":2,"gearRequirements":[],"addOnRequirements":["Forge"],"components":[{"name":"Stone","amount":20},{"name":"Wood","amount":20},{"name":"Dwarven Core","amount":10},{"name":"Iron Bar","amount":2}],"processing":[]},{"name":"Campfire","type":"comfort","tooltip":"A comfort for cooking, shelter, rest, and more.","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":[],"comfort":1,"components":[{"name":"Wood","amount":10},{"name":"Stone","amount":5}],"processing":[]},{"name":"Hearth","type":"comfort","tooltip":"A functional flame, but even more beautiful than a basic campfire.","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Stonecutter"],"comfort":1,"components":[{"name":"Wood","amount":20},{"name":"Stone","amount":100}],"processing":[]},{"name":"Hanging Brazier","type":"comfort","tooltip":"Provides light, and assurance, in the darkness.","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Forge"],"comfort":1,"components":[{"name":"Copper Bar","amount":20},{"name":"Tin Bar","amount":10},{"name":"Coal","amount":10},{"name":"Chains","amount":10}],"processing":[]},{"name":"Deer Rug","type":"comfort","tooltip":"The soft deer skin helps to sleep through the night","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Workbench"],"comfort":1,"components":[{"name":"Leather Hide","amount":4}],"processing":[]},{"name":"Wolf Rug","type":"comfort","tooltip":"The warm, thick furs make sleep even more delightful.","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Workbench"],"comfort":1,"components":[{"name":"Wolf Hide","amount":4}],"processing":[]},{"name":"Steer Rug","type":"comfort","tooltip":"The dense hide provides a soft floor.","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Workbench"],"comfort":1,"components":[{"name":"Tough Hide","amount":4}],"processing":[]},{"name":"Banners","type":"comfort","tooltip":"An inspiration to greet you at the dawn of each day.","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Workbench"],"comfort":1,"components":[{"name":"Leather Scraps","amount":30},{"name":"Berries","amount":10,"type":"food"}],"processing":[]},{"name":"Table","type":"comfort","tooltip":"A social space for relaxation","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Adze"],"comfort":1,"components":[{"name":"Ornate Wood","amount":150}],"processing":[]},{"name":"Chairs","type":"comfort","tooltip":"After a long day, a good sit can rejuvinate.","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Adze"],"comfort":1,"components":[{"name":"Ornate Wood","amount":50}],"processing":[]},{"name":"Throne","type":"comfort","tooltip":"A commanding seat to invigorate.","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Adze"],"comfort":1,"components":[{"name":"Ornate Wood","amount":100},{"name":"Iron Bar","amount":5}],"processing":[]},{"name":"Comfortable Beds","type":"comfort","tooltip":"With as much warmth as you need, this soft bed keeps worry at bay.","built":false,"enabled":true,"gearRequirements":[],"bedRequirement":1,"addOnRequirements":["Adze"],"comfort":1,"components":[{"name":"Ornate Wood","amount":500},{"name":"Leather Hide","amount":10},{"name":"Wolf Hide","amount":5},{"name":"Iron Bar","amount":10}],"processing":[]}]')
    },
    d9b6: function(e) {
        e.exports = JSON.parse('[{"name":"Hut","beds":1,"components":[{"name":"Wood","amount":20}],"addOnRequirements":["Hammer"]},{"name":"Small House","beds":2,"components":[{"name":"Wood","amount":150}],"addOnRequirements":["Hammer"]},{"name":"Longhouse","beds":4,"components":[{"name":"Wood","amount":600},{"name":"Hard Wood","amount":150}],"addOnRequirements":["Workbench"]},{"name":"Grand Hall","beds":6,"components":[{"name":"Wood","amount":1000},{"name":"Hard Wood","amount":400},{"name":"Stone","amount":400},{"name":"Iron Bar","amount":100}],"addOnRequirements":["Stonecutter"]},{"name":"Fortress","beds":10,"components":[{"name":"Wood","amount":5000},{"name":"Stone","amount":3000},{"name":"Iron Bar","amount":100},{"name":"Steel Bar","amount":100}],"addOnRequirements":["Blast Furnace"]}]')
    },
    e9be: function(e, a, t) {
        "use strict";
        t("6e55")
    },
    f968: function(e, a, t) {},
    fa15: function(e) {
        e.exports = JSON.parse('[{"name":"Gather","staminaCost":2,"gearRequirements":[],"food":[{"name":"Berries","perSecond":0.25},{"name":"Blueberries","perSecond":0.25,"worldTier":1},{"name":"Winterberries","perSecond":0.25,"worldTier":3},{"name":"Mushrooms","perSecond":0.2}],"items":[{"name":"Stone","perSecond":0.1,"worldTier":0},{"name":"Carrot Seeds","perSecond":0.25,"worldTier":1},{"name":"Turnip Seeds","perSecond":0.25,"worldTier":2},{"name":"Obsidian","perSecond":0.125,"worldTier":3},{"name":"Flax","perSecond":0.05,"worldTier":4},{"name":"Wheat","perSecond":0.2,"worldTier":4},{"name":"Wood","perSecond":0.5},{"name":"Queen Bee","perSecond":0.0005}]},{"name":"Chop Wood","staminaCost":5,"worldTier":0,"gearRequirements":["Stone Axe","Flint Axe","Bronze Axe"],"addOnRequirements":["Chopping Block"],"items":[{"name":"Wood","perSecond":3},{"name":"Resin","perSecond":0.1}]},{"name":"Forestry","worldTier":1,"staminaCost":7,"gearRequirements":["Bronze Axe"],"items":[{"name":"Wood","perSecond":3},{"name":"Resin","perSecond":0.1},{"name":"Hard Wood","perSecond":1},{"name":"Ornate Wood","perSecond":1}]},{"name":"Small Game Hunting","staminaCost":5,"worldTier":null,"gearRequirements":["Crude Bow","Ornate Bow","Compound Bow"],"items":[{"name":"Leather Hide","perSecond":0.1},{"name":"Leather Scraps","perSecond":0.2},{"name":"Raw Meat","perSecond":0.2}]},{"name":"Large Game Hunting","staminaCost":10,"worldTier":null,"gearRequirements":["Compound Bow"],"items":[{"name":"Tough Hide","perSecond":0.1},{"name":"Raw Large Game Meat","perSecond":0.2}]},{"name":"Fishing","staminaCost":10,"worldTier":0,"gearRequirements":["Fishing Rod"],"addOnRequirements":["Spinning Wheel"],"items":[{"name":"Raw Fish","perSecond":0.5}]},{"name":"Deep Sea Fishing","staminaCost":20,"worldTier":0,"gearRequirements":["Harpoon"],"addOnRequirements":["Spinning Wheel"],"items":[{"name":"Raw Serpent Meat","perSecond":0.5}]},{"name":"Stone Mining","staminaCost":10,"worldTier":null,"gearRequirements":["Bone Pickaxe","Bronze Pickaxe","Iron Pickaxe"],"items":[{"name":"Stone","perSecond":3}]},{"name":"Tin Mining","staminaCost":10,"worldTier":1,"gearRequirements":["Bone Pickaxe","Bronze Pickaxe","Iron Pickaxe"],"items":[{"name":"Tin Ore","perSecond":0.5}]},{"name":"Copper Mining","staminaCost":10,"worldTier":1,"gearRequirements":["Bone Pickaxe","Bronze Pickaxe","Iron Pickaxe"],"items":[{"name":"Copper Ore","perSecond":0.2},{"name":"Stone","perSecond":0.25}]},{"name":"Iron Mining","staminaCost":12,"worldTier":2,"gearRequirements":["Bronze Pickaxe","Iron Pickaxe"],"items":[{"name":"Iron Ore","perSecond":0.15}]},{"name":"Silver Mining","staminaCost":15,"worldTier":4,"gearRequirements":["Iron Pickaxe"],"items":[{"name":"Silver Ore","perSecond":0.1}]},{"name":"Gold Mining","staminaCost":30,"worldTier":5,"gearRequirements":["Iron Pickaxe"],"items":[{"name":"Gold Ore","perSecond":0.025}]},{"name":"Titanium Mining","staminaCost":20,"worldTier":6,"gearRequirements":["Iron Pickaxe"],"items":[{"name":"Titanium Ore","perSecond":0.1}]},{"name":"Farming","staminaCost":5,"gearRequirements":["Cultivator"],"processing":[{"input":[{"name":"Carrot Seeds","amount":1}],"output":{"name":"Carrots","amount":1,"type":"food"}},{"input":[{"name":"Turnip Seeds","amount":1}],"output":{"name":"Turnips","amount":1,"type":"food"}}],"food":[{"name":"Mushrooms","perSecond":0.1}],"items":[]}]')
    }
});
//# sourceMappingURL=app.156a12c3.js.map