var orm = require("./config/orm");

orm.selectAndOrder("animal_name", "pet", "price");

orm.selectWhere("pets", "animal_name", "Rachel");

orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");