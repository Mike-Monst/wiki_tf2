/* eslint-disable no-unused-vars */
import { React, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage } from 'mdb-react-ui-kit';
import ImageGrid from './ImageGrid'; // Asegúrate de que la ruta sea correcta
import '../index.css';

function Classes() {
  const classes = [
    { name: 'Scout', 
		description: `Born and raised in Boston, Massachusetts, USA, the Scout is a fast-running scrapper with a baseball bat and snarky "in-your-face" attitude. He is the fastest and most mobile mercenary on the battlefield unassisted. Scout's Double Jump helps him outmaneuver slower opponents like the Heavy and navigate the terrain while dodging oncoming bullets and projectiles. Carrying a Scattergun, Pistol, and Bat, he is an ideal class for aggressive fighting and flanking. Scout excels at "hit-and-run" tactics that sap away enemy health as his high mobility allows him to get in, do damage, and escape before being noticed. However, Scout possesses the lowest default health pool (alongside the Engineer, Sniper, and Spy), leaving him vulnerable on the front line. However, this is a fair trade-off given his ability to run in and out of contested hot spots quickly, enabling him to turn the tide of battle before the enemy team can even take notice./n

		Scout is a generally excellent choice for focusing on the objective. He is the only class that can capture control points and push carts at twice the normal rate. The Demoman and Soldier can only replicate this ability when equipping the Pain Train. His speed also makes him ideal for capturing intelligence briefcases./n

		The Scout is voiced by Nathan Vetterlein. `, 
		class: '/scout.png', image: '/webp/scout.webp' },

    { name: 'Soldier', 
		description: `The Soldier is a crazed, jingoistic patriot from Midwest, USA, who portrays himself as a military man despite being rejected from the US army. Tough and well-armed, he is versatile, capable of both offense and defense, and a great starter class to get familiar with the game./n

		Well-balanced and possessing both survivability and mobility, the Soldier is considered one of the most flexible classes in Team Fortress 2. Despite his low ground movement speed, he is capable of using rocket jumps to reach his destination quickly. His large health pool is second only to that of the Heavy, and his wide array of armaments and weaponry allows him to bring whatever weapon or equipment is best suited to the situation at hand./n

		The Soldier is well known for his spectacular rocket jump. In defiance of all good sense and judgment, the Soldier can detonate a rocket at his feet and launch himself skyward at the cost of some health (which can be reduced by the Gunboats, or negated altogether with the Rocket Jumper). To rocket jump effectively, the player must fire the rocket at the ground or a wall, then immediately jump and crouch. This ability allows the Soldier to navigate the battlefield by air, appear from unexpected places, and reach areas inaccessible to the Scout's double jump and HYPE jumps. After rocket jumping, the Soldier can remain airborne for longer by deploying the B.A.S.E. Jumper./n

		The Soldier was[1] voiced by the late Rick May. He was voiced by May and Nolan North in Expiration Date. `, 
		class: '/soldier.png', image: '/webp/soldier.webp' },
    { name: 'Pyro', 
		description: `The Pyro is a pyromaniac of indeterminate origin with a muffled voice and a burning passion for all things fire related. As shown in Meet the Pyro, the Pyro may be delusional, visualizing themself in a utopian fantasy world known as Pyroland./n

		The Pyro specializes in fighting enemies at close range using a homemade Flame Thrower. Enemies set on fire suffer from afterburn and take additional damage over time, allowing the Pyro to excel at hit-and-run tactics. Due to the Flame Thrower's short range, the Pyro is weaker at longer ranges and relies heavily on ambushing and taking alternate routes to catch opponents off-guard./n

		Due to the Flame Thrower's limited range and the slow firing speed of their flare guns, the Pyro is fairly weak at mid-to-long range. The Flame Thrower's compression blast, can reflect enemy projectiles, extinguish burning teammates, and forcibly reposition enemies, even those who are invulnerable to damage./n

		Because enemies hit by fire visibly burst into flames, the Pyro is the best class for catching Spies, as briefly bathing an area or suspicious teammates in fire can instantly nullify an enemy Spy's cloak and disguise. Additionally, they can use the Homewrecker, the Neon Annihilator, or the Maul to protect a friendly Engineer's buildings from an enemy Spy's Sapper if the Engineer himself is not present./n

		While the Pyro does not have many mobility options by default, the Thermal Thruster can be used to launch the Pyro into the air and onto places normally inaccessible to the Pyro. Additionally, the Detonator and the Scorch Shot can be used to make much smaller flare jumps. A skilled Pyro may even use an airblasted enemy projectile for mobility, delivering swift immolation to enemies who may have believed they were outside of the Pyro's range./n

		They wear an asbestos-lined suit that nullifies the afterburn of other Pyros and all flame-related weaponry (except for the Dragon's Fury and Gas Passer), although it does not provide any resistance to direct fire damage. The three incendiary grenades that they carry are purely cosmetic and cannot be used./n

		The Pyro is voiced by Dennis Bateman. `, 
		class: '/pyro.png', image: '/webp/pyro.webp' },
    { name: 'Demoman', 
		description: `The Demoman is a self-described black Scottish cyclops and a scrumpy-swilling demolitions expert from Ullapool, Scotland, who is one of the most versatile members of the team. Capable of dealing large amounts of explosive damage, whether directly or through splash damage. Armed with his Grenade Launcher and Stickybomb Launcher, the Demoman uses his one good eye and knowledge of his surrounding environment for well-timed stickybomb detonations and precise grenade impacts that send enemies skyward, often in many pieces. His weapons' large splash radius can also work against him, if an enemy manages to catch him at close range he will often take damage from his own explosives as he struggles to defend himself./n

		The Demoman excels at swift destruction; he can launch grenades and stickybombs at creative angles to wreak havoc on enemy encampments and Sentry Guns while remaining out of the line of fire, or simply blast his enemies into a red mist with a seemingly-endless stream of these explosives. His stickybombs are also a perfect tool for area denial, and are effective at keeping opponents away from carts, control points, Intelligence, or any other location he deems off-limits./n

		The Demoman can replace his default Stickybomb Launcher with a shield, allowing him to charge forward rapidly and gain a guaranteed Mini-Crits or Critical hit on melee weapons. The shields can often be paired with one of the various melee weapons in his arsenal to compliment the charging ability, such as the Eyelander's increased impact damage, the Claidheamh Mòr's increased charging duration, or the Persian Persuader's ability to recharge the ability by picking up ammo packs. The Demoman's primary weapon can be switched out for the Ali Baba's Wee Booties or the Bootlegger, giving even more buffs to a shield while also being usable without a shield. A Demoman running a boots primary, a shield secondary, and a sword melee weapon is often referred to as a Demoknight./n

		The Demoman is voiced by Gary Schwartz. `, 
		class: '/demoman.png', image: '/webp/demoman.webp' },
    { name: 'Heavy', 
		description: `The Heavy Weapons Guy, more commonly known as the Heavy, is a towering hulk of a man hailing from the USSR. He is often considered the face of the game, due to his prominent appearance on box-art, promotional materials, and loading screens. He starred in the very first Meet the Team video, and has appeared in all further movies to date./n

		The Heavy is the largest and arguably most dangerous class in Team Fortress 2 - boasting the most base health, combined with the devastating firepower of his trusty Minigun. This weapon can inflict huge damage at a very high rate of fire, allowing him to mow down opposing Heavies, cowards, and tiny-baby-men in mere seconds. However, as the slowest class in the game, the Heavy's low movement speed is his main weakness, making him an appealing target for Snipers and Spies. Upon revving up or firing his Minigun, this already unimpressive speed slows to a crawl, making it even easier for enemies to damage him. As a result, the Heavy is often dependent on support from Medics and Engineers to keep him in the fight. Thanks to his burly stature, he also takes 50% less knockback from most damage sources - excluding Sentry Gun bullets./n

		Aside from shredding entire teams when adequately supported, the Heavy is able to provide limited healing for himself and his comrades via his Sandvich, which, when consumed, is capable of restoring him to perfect health within seconds. It can also be dropped to provide an instant, often-appreciated 50% health boost to his teammates, equal to a medium health kit. However, if the Heavy is not careful, an opportunistic enemy may pick up the dropped Sandvich for a health boost of their own./n

		The Heavy is voiced by Gary Schwartz. `,
		class: '/heavy.png', image: '/webp/heavy.webp' },
    { name: 'Engineer', 
		description: `The Engineer is a soft-spoken, amiable Texan from Bee Cave, Texas, USA with an interest in all mechanical things. He specializes in constructing and maintaining Buildings that provide support to his team, rather than fighting at the front lines, making him the most suitable for defense. The Engineer's various gadgets include the Sentry Gun, an automated turret that fires at any enemy in range, the Dispenser, a device that restores the health and ammunition of nearby teammates, and Teleporters that quickly transport players from point A to point B./n

		Because the Engineer's ingenious devices are under constant threat from explosives and devious enemy Spies, a good Engineer must keep his gear under a watchful eye and under repair with his Wrench at all times. When the Engineer needs to get his hands dirty, his trio of generic yet capable weapons, along with the assistance of his helpful hardware, make him more than capable of holding his own in a fight. If need be, the Engineer can even pick up and haul constructed buildings to redeploy them in more favorable locations. While usually viewed as a defensive class, the Engineer has a selection of high-tech weapons that allow him to destroy projectiles or to build faster-deploying, less damaging Sentry Guns, which give him great utility at the front lines too. His Teleporters are also a key point to both the offensive and defensive team's success, allowing slower, heavier classes to reach the front-lines quicker./n

		The Engineer is voiced by Grant Goodeve in the game, and by Nolan North in the short film Expiration Date. `,
		class: '/engineer.png', image: '/webp/engineer.webp' },
    { name: 'Medic', 
		description: `The Medic is a Teutonic man of medicine from Stuttgart, Germany. While his adherence to medical ethics is tenuous at best, he is nonetheless his team's primary healing source, and is often found near the front lines bolstering his teammates. Although the Medic's Syringe Gun and Bonesaw aren't the most excellent weapons for direct combat, he can typically still be found near the front lines, healing wounded teammates while trying to stay out of enemy fire./n

		When the Medic focuses his Medi Gun on a nearby teammate, they will gradually regain health; patients who are already at full health have their health temporarily increased up to 150% of their base health capacity, allowing them to fight more aggressively. However, teammates who have not taken damage recently are healed faster, encouraging other players withdrawals when injured./n

		When healing, the Medic gradually fills a unique ÜberCharge bar, which can fill faster if healing injured or not-fully-overhealed teammates. When the ÜberCharge bar is fully charged, the Medic's Medi Gun begins to crackle, accompanied by small electric team-colored particles at its tip, indicating that he can now deploy a unique charge to benefit his healing target (and himself) for eight seconds. A charge from the Medi Gun offers temporary invulnerability; a charge from the Kritzkrieg grants guaranteed critical hits to your heal target; the Quick-Fix grants rapid healing, along with immunity to knockback and compression blasts from Pyros; and the Vaccinator grants enhanced damage resistance to a specific damage type (bullets, explosives, and fire)./n

		Although the Medic cannot heal himself with his Medi Gun (unless using the Quick-Fix's ÜberCharge or the Kritzkrieg's Oktoberfest taunt), he is capable of passively regenerating health over time. The longer he stays out of combat and avoids taking damage, the faster he will heal. By default, an injured Medic begins regenerating health at a rate of 3 points per second, increasing over the following ten seconds to a maximum of 6 health per second, though this base rate increases while holding the Amputator and is reduced if the Blutsauger is equipped. Healing injured teammates will double the current rate of health regeneration, encouraging the Medic to heal them over healthy patients./n

		The Medic's lower firepower and combat abilities mean that he is more reliant on his teammates defending him than his own weapons defending him. The Syringe Gun's slow projectiles and low damage makes it hard to fight any class head on, while the Bonesaw's limited range puts the Medic in considerable danger./n

		The Medic is voiced by Robin Atkin Downes. `,
		class: '/medic.png', image: '/webp/medic.webp' },
    { name: 'Sniper', 
		description: `Hailing from the lost country of New Zealand and raised in the unforgiving Australian outback, the Sniper is a tough and ready crack shot. The Sniper's main role on the battlefield is to pick off important enemy targets from afar using his Sniper Rifle and its ability to deal guaranteed critical hits with a headshot (with some exceptions). He is effective at long range, but weakens with proximity, where he is forced to use his Submachine Gun or his Kukri. As a result, the Sniper tends to perch on higher grounds or in hard-to-see places, where he can easily pin down enemies at chokepoints.

		Although he is typically known for instantaneously killing enemies at a distance, the Sniper can use the Huntsman to get closer to the enemy. Additionally, the Sydney Sleeper and the mysterious contents of Jarate allow him to take on a support role by causing enemies to take mini-crits.

		The Sniper is voiced by John Patrick Lowrie. `,
		class: '/sniper.png', image: '/webp/sniper.webp' },
    { name: 'Spy', 
		description: `Hailing from an indeterminate region of France, the Spy is an enthusiast of sharp suits and even sharper knives. Using a unique array of cloaking watches, he can render himself invisible or even feign his own death, letting him infiltrate enemy lines with little chance of detection. His Disguise Kit lets him impersonate any class on either team. With enough skill in the art of deception, the Spy can momentarily fool enemies with his disguise, lulling them into a false sense of security. When the time is right, he can emerge from the woodwork to strike a killing blow, stabbing his unsuspecting "teammate" in the back. A backstab with any of the Spy's knives will kill most foes in a single hit — provided they are not under the effects of any type of invulnerability.

		In addition to being able to swiftly assassinate key enemies, the Spy can disable and destroy Engineer-constructed buildings with his Sapper. Once attached, the Sapper disables and slowly drains health from the enemy building, eventually resulting in its destruction. However, a Sapper can be removed by an Engineer, or Pyro wielding the Homewrecker, Maul, or Neon Annihilator.

		The Spy has the unique ability to use enemy Dispensers while disguised, and use enemy Teleporters at any time, enabling him to replenish his health and ammo behind enemy lines and enter Engineer nests undetected. Should any enemy be unfortunate enough to be standing on a Teleporter exit as the Spy teleports, they will be telefragged and die instantly. However, the Spy still collides with enemy buildings, even when disguised.

		Medics can both heal and apply ÜberCharge effects to disguised enemy Spies. Particularly adept Spies can use this to their advantage by coercing enemy Medics into healing them, allowing him to more easily pull off stabs amidst a group of enemies.

		Whereas most players can only see the names and health of their teammates, the Spy can observe the names and health of the enemy team as well (an ability unique to the Spy and a Medic carrying the Solemn Vow), allowing him to relay useful intelligence and coordinate team pushes. This synergizes well with his cloaking ability, which makes him ideal for identifying and calling out enemy positions and upcoming pushes. A skilled Spy can apply pressure from behind the enemy whilst the rest of his team pushes from the front, resulting in a pinch that any uncoordinated team will find difficult to escape from.

		The Spy is voiced by Dennis Bateman. `,
		class: '/spy.png', image: '/webp/spy.webp' },
  ];

  
  const renderDescription = (description) => {
    return description.split('/n').map((text, index) => (
      <p key={index}>{text}</p>
    ));
  };

  const [selectedClass, setSelectedClass] = useState("");

  return (
    <Container>
      <Box my={4}>
        
		
        <ImageGrid classes={classes} setSelectedClass={setSelectedClass} />
        {selectedClass && (
          <>
           
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>{selectedClass.name}</MDBCardTitle>
                <MDBCardText>{renderDescription(selectedClass.description)}</MDBCardText>
               </MDBCardBody>
            </MDBCard>
          </>
        )}
      </Box>
    </Container>
  );
}

export default Classes;
